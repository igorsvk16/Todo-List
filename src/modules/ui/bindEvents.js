import { renderApp } from "./appView";
import { addProject, addTodo, getState, setCurrentProject, removeTodo, toggleTodo } from "../app";
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
};