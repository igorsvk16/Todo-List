import { createProject } from "./project";
import { createTodo } from "./todo";
import * as storage from "./storage";

const DEFAULT_PROJECT_NAME = "Default";

let state = {
    projects: [],
    currentProjectId: null,
};

function ensureDefaultProject() {
    const p = createProject({ name: DEFAULT_PROJECT_NAME });
    state.projects = [p];
    state.currentProjectId = p.id;
}

export function init() {
    const saved = storage.load();

    if (saved && Array.isArray(saved.projects) && saved.projects.length > 0) {
        state = saved;
    } else {
        ensureDefaultProject();
        storage.save(state);
    }
}

export function getState() {
    return structuredClone(state);
}

export function addProject(name) {
    const project = createProject({ name });
    state.projects.push(project);
    state.currentProjectId = project.id;
    storage.save(state);
    return project.id;
}

export function setCurrentProject(projectId) {
    state.currentProjectId = projectId;
    storage.save(state);
}

export function addTodo(projectId, todoData) {
    const project = state.projects.find(p => p.id === projectId);
    if (!project) return null;

    const todo = createTodo(todoData);
    project.todos.push(todo);
    storage.save(state)
    return todo.id;
};