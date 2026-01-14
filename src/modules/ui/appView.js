import { createLayout } from "./layout";
import { renderProjects } from "./projectsView";
import { renderTodos } from "./todosView";

export function renderApp() {
    const { sidebar, main } = createLayout();
    renderProjects(sidebar);
    renderTodos(main);
    return { sidebar, main };
}