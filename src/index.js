import { init, addProject, addTodo, getState } from "./modules/app";

init();
console.log("STATE AFTER INIT:", getState());

const newProjectId = addProject("work");
addTodo(newProjectId, { title: "finish", priority: "high" });

console.log("STATE AFTER CHANGES:", getState());
