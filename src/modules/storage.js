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