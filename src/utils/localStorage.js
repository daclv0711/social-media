
export const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
    const value = JSON.parse(localStorage.getItem(key)) ?? '';
    if (value === undefined || value === null) {
        setLocalStorage(key, "");
    }
    return value;
}