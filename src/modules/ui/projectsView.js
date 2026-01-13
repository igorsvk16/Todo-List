import { getState } from "../app";

export function renderProjects(sidebar) {
    const { projects, currentProjectId } = getState;
    sidebar.innerHtml = "";

    const title = document.createElement("h2");
    title.textContent = "Projects";
    sidebar.append(title);

    const list = document.createElement("ul");
    list.className = "project-list";

    projects.forEach((p) => {
        const li = document.createElement("li");

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = p.name;
        btn.dataset.projectId = p.id;
        btn.className = "project-btn" + (p.id === currentProjectId ? " is-active" : "");

        li.append(btn);
        list.append(li);

        const form = document.createElement("form");
        form.className = "project-form";
        form.innerHTML = `
            <input name="name" placeholder="New prjoect" required />
            <button type="submit">Add</button>
            `;
            sidebar.append(form);
    });
}