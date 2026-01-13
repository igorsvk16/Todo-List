export function createLayout() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const app = document.createElement("div");
    app.className = "app";

    const sidebar = document.createElement("aside");
    sidebar.className("sidebar");

    const main = document.createElement("main");
    main.className = "main";

    app.append(sidebar, main);
    content.append(app);

    return { sidebar, main };
}