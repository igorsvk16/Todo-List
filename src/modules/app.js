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
  const p = state.projects.find(x => x.id === projectId);
  if (!p) return false;
  state.currentProjectId = p.id;
  return true;
}

export function addTodo(projectId, todoData) {
    const project = state.projects.find(p => p.id === projectId);
    if (!project) return null;

    const todo = createTodo(todoData);
    project.todos.push(todo);
    storage.save(state)
    return todo.id;
};

export function removeTodo(projectId, todoId) {
    const p = state.projects.find(x => x.id === projectId);
    if (!p) return false;
    const idx = p.todos.findIndex(t => t.id === todoId)
    if (idx === -1) return false;
    p.todos.splice(idx, 1);
    return true;
}

export function toggleTodo(projectId, todoId) {
    const p = state.projects.find(x => x.id === projectId);
    if (!p) return false;
    const t = p.todos.find(x => x.id === todoId);
    if (!t) return false;
    t.completed = !t.completed;
    return true;
}