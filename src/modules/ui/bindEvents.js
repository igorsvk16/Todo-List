import { renderApp } from "./appView";
import { addProject, addTodo, getState, setCurrentProject, removeTodo, toggleTodo, updateTodo } from "../app";
import { getExpandedTodoId, setExpandedTodoId } from "./todosView";

let isBound = false;

export function bindUI() {
    if (isBound) return;
    isBound = true;

    const { sidebar, main } = renderApp();

    sidebar.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-project-id]");
        if (!btn) return;

        setCurrentProject(btn.dataset.projectId);
        renderApp();
    });

    sidebar.addEventListener("submit", (e) => {
        if (!e.target.matches(".project-form")) return;
        e.preventDefault();

        const name = (new FormData(e.target).get("name") ?? "").trim();
        if (!name) return;

        addProject(name);
        e.target.reset();
        renderApp();
    })

    main.addEventListener("submit", (e) => {
        if (!e.target.matches(".todo-form")) return;
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = (formData.get("title") ?? "").trim();
        const priority = formData.get("priority");
        const dueDate = formData.get("dueDate");

        if (!title) return;

        addTodo(getState().currentProjectId, { title, priority, dueDate });
        e.target.reset();
        renderApp();
    });

    main.addEventListener("click", (e) => {
        const deleteBtn = e.target.closest("[data-action='delete']");
        if (deleteBtn) {
            const todoItem = deleteBtn.closest("[data-todo-id]");
            if (!todoItem) return;

            removeTodo(getState().currentProjectId, todoItem.dataset.todoId);
            renderApp();
            return;
        }
        
        if (e.target.closest(".todo-edit-form")) return;
        const item = e.target.closest(".todo-item");
        if (!item) return;

        if (e.target.closest("input[type='checkbox'][data-action='toggle']")) return;

        const todoId = item.dataset.todoId;
        if (!todoId) return;

        if (getExpandedTodoId() === todoId) {
            setExpandedTodoId(null); 
        } else {
            setExpandedTodoId(todoId);
        }
        renderApp();
    });

    main.addEventListener("change", (e) => {
        const checkBox = e.target.closest("input[type='checkbox'][data-action='toggle']");
        if (!checkBox) return;

        const item = checkBox.closest("[data-todo-id]");
        if (!item) return;

        toggleTodo(getState().currentProjectId, item.dataset.todoId);
        renderApp();
    });

    main.addEventListener("submit", (e) => {
        if (!e.target.matches(".todo-edit-form")) return;
        e.preventDefault();

        const todoId = e.target.dataset.todoId;
        if (!todoId) return;

        const fd = new FormData(e.target);
        const title = (fd.get("title") ?? "").trim();
        if (!title) return;

        updateTodo(getState().currentProjectId, todoId, {
            title,
            description: (fd.get("description") ?? "").trim(),
            dueDate: fd.get("dueDate") ?? "",
            priority: fd.get("priority") ?? "medium",
            notes: (fd.get("notes") ?? "").trim(),
        });
        
        setExpandedTodoId(null);
        renderApp();
    })
};