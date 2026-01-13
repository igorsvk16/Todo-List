export function createTodo({
    id = crypto.randomUUID(),
    title = "",
    description = "",
    dueDate = "",
    priority = "normal",
    notes = "",
    completed = false,
} = {}) {
    return { id, title, description, dueDate, priority, notes, completed };
}
