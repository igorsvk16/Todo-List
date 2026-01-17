import { renderApp } from "./appView";
import { addProject, addTodo, getState, setCurrentProject, removeTodo, toggleTodo } from "../app";
import { createLayout } from "./layout";

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

    main.addEventListener((e) => {
        const deleteBtn = e.target.closest("[data-action='delete'");
    })

    main.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action='delete']");
        if (!btn) return;

        const item = btn.closest("[data-todo-id]");
        if (!item) return;

        removeTodo(getState().currentProjectId, item.dataset.todoId);
        renderApp();
    });

    main.addEventListener("change", (e) => {
        const checkBox = e.target.closest("input[type='checkbox'][data-action='toggle']");
        if (!checkBox) return;

        const item = checkBox.closest("[data-todo-id]");
        if (!item) return;

        toggleTodo(getState().currentProjectId, item.dataset.todoId);
        renderApp();
    })
}