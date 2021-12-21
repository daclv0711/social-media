
export const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem(key))
            return JSON.parse(localStorage.getItem(key)) ?? '';
    }

    return '';
}