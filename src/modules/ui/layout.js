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