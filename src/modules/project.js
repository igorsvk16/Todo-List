export function createProject({
    id = crypto.randomUUID(),
    name,
    todos = [],
} = {}) {
    return { id, name, todos };
}