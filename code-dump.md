# Project sources

## src/index.js

```js
import { init } from "./modules/app";
import { bindUI } from "./modules/ui/bindEvents";

init();
bindUI();
```

## src/template.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
</head>
<body>
    <div id="content"></div>
</body>
</html>
```

## src/styles.css

```css
.todo-due {
    margin-left: 12px;
    opacity: 0.7;
    font-size: 0.9em;
};
```

## src/modules/app.js

```js
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
  storage.save(state);
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
    const project = state.projects.find(x => x.id === projectId);
    if (!project) return false;

    const idx = project.todos.findIndex(t => t.id === todoId);
    if (idx === -1) return false;

    project.todos.splice(idx, 1);
    storage.save(state);
    return true;
}

export function toggleTodo(projectId, todoId) {
    const p = state.projects.find(x => x.id === projectId);
    if (!p) return false;
    const t = p.todos.find(x => x.id === todoId);
    if (!t) return false;
    t.completed = !t.completed;

    storage.save(state);
    return true;
}
```

## src/modules/project.js

```js
export function createProject({
    id = crypto.randomUUID(),
    name,
    todos = [],
} = {}) {
    return { id, name, todos };
}
```

## src/modules/storage.js

```js
const STORAGE_KEY = "todo-app-data";

export function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function load() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    try {
        return JSON.parse(raw);
    } catch (e) {
        console.warn("localStorage data is corrupted, resetting")
        return null;
    }
}

export function clear() {
    localStorage.removeItem(STORAGE_KEY);
}
```

## src/modules/todo.js

```js
export function createTodo({
    id = crypto.randomUUID(),
    title = "",
    description = "",
    dueDate = "",
    priority = "medium",
    notes = "",
    completed = false,
} = {}) {
    return { id, title, description, dueDate, priority, notes, completed };
}
```

## src/modules/ui/appView.js

```js
import { createLayout } from "./layout";
import { renderProjects } from "./projectsView";
import { renderTodos } from "./todosView";

export function renderApp() {
    const { sidebar, main } = createLayout();
    renderProjects(sidebar);
    renderTodos(main);
    return { sidebar, main };
}
```

## src/modules/ui/bindEvents.js

```js
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
    return { sidebar, main } = createLayout();
}
```

## src/modules/ui/layout.js

```js
let cached = null;

export function createLayout() {
    if (cached) return cached;

    const content = document.getElementById("content");
    if (!content) throw new Error("No #content element found in HTML template");

    content.innerHTML = "";

    const app = document.createElement("div");
    app.className = "app";

    const sidebar = document.createElement("aside");
    sidebar.className = "sidebar";

    const main = document.createElement("main");
    main.className = "main";

    app.append(sidebar, main);
    content.append(app);

    cached = { sidebar, main };
    return cached;
}
```

## src/modules/ui/projectsView.js

```js
import { getState } from "../app";

export function renderProjects(sidebar) {
    const { projects, currentProjectId } = getState();

    sidebar.innerHTML = "";

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

    });
    const form = document.createElement("form");
        form.className = "project-form";
        form.innerHTML = `
            <input name="name" placeholder="New project" required />
            <button type="submit">Add</button>
        `;
        
    sidebar.append(list);
    sidebar.append(form);
}
```

## src/modules/ui/todosView.js

```js
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
                <span class="todo-title">${todo.title}</span>
                <span class="todo-due">${todo.dueDate ? todo.dueDate : ""}</span>
            </label>
                <span class="todo-priority">${todo.priority ?? ""}</span>
                <button type="button" data-action="delete">×</button>
        `;

        list.append(li);
    });

    main.append(list);

    const form = document.createElement("form");
    form.className = 'todo-form';
    form.innerHTML = /* html */`
        <input name="title" placeholder="New todo" required />
        <input> type="date" name="dueDate" />
        <select name="priority">
            <option value="low">Low</option>
            <option value="medium" selected>Medium</option>
            <option value="high">High</option>
        </select>
        <button type="submit">Add todo</button>
    `;
    main.append(form);
}
```

## package.json

```json
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/igorsvk16/webpack.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "bugs": {
    "url": "https://github.com/igorsvk16/webpack/issues"
  },
  "homepage": "https://github.com/igorsvk16/webpack#readme",
  "devDependencies": {
    "@babel/core": "^7.28.6",
    "@babel/preset-env": "^7.28.6",
    "@eslint/js": "^9.39.2",
    "babel-loader": "^10.0.0",
    "css-loader": "^7.1.2",
    "eslint": "^9.39.2",
    "globals": "^17.0.0",
    "html-loader": "^5.1.0",
    "html-webpack-plugin": "^5.6.5",
    "style-loader": "^4.0.0",
    "webpack": "^5.104.1",
    "webpack-cli": "^6.0.1",
    "webpack-dev-server": "^5.2.2"
  }
}
```

## webpack.config.js

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
    devtool: "eval-source-map",
    devServer: {
    watchFiles: ["./src/template.html"],
  },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/template.html",
        }),
    ],
    module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] },
        },
        },
        {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        },
        {
        test: /\.html$/i,
        loader: "html-loader",
        },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        },
    ],
    },

};
```

