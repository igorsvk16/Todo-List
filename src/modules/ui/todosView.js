import { getState } from "../app";

let expandedTodoId = null;

export function setExpandedTodoId(id) {
    expandedTodoId = id;
}

export function getExpandedTodoId() {
    return expandedTodoId;
}

export function renderTodos(main) {
    const { projects, currentProjectId } = getState();
    main.innerHTML = "";

    const project = projects.find(p => p.id === currentProjectId);

    const h1 = document.createElement("h1");
    h1.textContent = project ? project.name : "No project";
    main.append(h1);

    if (!project) return;

    const list = document.createElement("ul");
    list.className = "todo-list";

    project.todos.forEach((todo) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.dataset.todoId = todo.id;

        li.innerHTML = `
            <label>
                <input type="checkbox" data-action="toggle" ${todo.completed ? "checked" : ""} />
                <span class="todo-title">${todo.title}</span>
                <span class="todo-due">${todo.dueDate ? todo.dueDate : ""}</span>
            </label>
            <span class="todo-priority">${todo.priority ?? ""}</span>
            <button type="button" data-action="delete">×</button>
        `;

        const isExpanded = todo.id === expandedTodoId;
        if (isExpanded) {
            const form = document.createElement("form");
            form.className = "todo-edit-form";
            form.dataset.todoId = todo.id;

            form.innerHTML = /* html */ `
            <div>
                <label>Title</label>
                <input name="title" value="${todo.title ?? ""}" required />
            </div>

            <div>
                <label>Description</label>
                <textarea name="description">${todo.description ?? ""}</textarea>
            </div>

            <div>
                <label>Due date</label>
                <input type="date" name="dueDate" value="${todo.dueDate ?? ""}" />
            </div>

            <div>
                <label>Priority</label>
                <select name="priority">
                    <option value="low" ${todo.priority === "low" ? "selected" : ""}>Low</option>
                    <option value="medium" ${todo.priority === "medium" ? "selected" : ""}>Medium</option>
                    <option value="high" ${todo.priority === "high" ? "selected" : ""}>High</option>
                </select>
            </div>

            <div>
                <label>Notes</label>
                <textarea name="notes">${todo.notes ?? ""}</textarea>
            </div>
            <div class="todo-edit-actions">
                <button type="submit">Save</button>
            </div>
            `;
            li.append(form);
        }
        list.append(li);
    });

    main.append(list);

    const form = document.createElement("form");
    form.className = 'todo-form';
    form.innerHTML = /* html */`
        <input name="title" placeholder="New todo" required />
        <input type="date" name="dueDate" />
        <select name="priority">
            <option value="low">Low</option>
            <option value="medium" selected>Medium</option>
            <option value="high">High</option>
        </select>
        <button type="submit">Add todo</button>
    `;
    main.append(form);
}
