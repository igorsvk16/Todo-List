import { renderApp } from "./appView";
import { addProject, addTodo, getState, setCurrentProject, removeTodo, toggleTodo } from "../app";

export function bindUI() {
    const { sidebar, main } = renderApp();

    sidebar.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-project-id]");
        if (!btn) return;

        setCurrentProject(btn.dataset.projectId);
        renderApp();
    });

    sidebar.addEventListener("submit", (e) => {
        if (!e.target.matches(".projects-form")) return;
        e.preventDefault();

        const name = new FormData(e.target).get("name").trim();
        if (!name) return;

        addProject(name);
        e.target.reset();
        renderApp();
    })

    main.addEventListener("submit", (e) => {
        if (e.target.matches(".todo-form")) return;
        e.preventDefault();

        const fd = new FormData(e.target);
        const title = fd.get("title").trim();
        const priority = fd.get("priority");

        if (!title) return;
    })
}