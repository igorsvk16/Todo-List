import { getState } from "../app";

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
                <span class="todo-title">${todo-title}</span>
                <label>
                <span class="todo-priority>${todo.priority ?? ""}</span>
                <button type="button" data-action="delete">×</button>
        `;

        list.append(list);
    });

    main.append(list);

    const form = document.createElement("form");
    form.className = 'todo-form';
    form.innerHTML = /* html */`
        <input name="title" placeholder="New todo" required />
        <select name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <button type="submit">Add todo</button>
    `;
    main.append(form);
}