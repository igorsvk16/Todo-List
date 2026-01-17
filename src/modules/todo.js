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
