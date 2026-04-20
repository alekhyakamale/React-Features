import { useState } from "react"

export default function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue //we converted the existing string value to json while returning
    });

    const setStoredValue = (newValue) => {
        setValue(newValue); //This detects change in state
        //Local storage can only store strings hence we stringify the value before storing it.
        localStorage.setItem(key, JSON.stringify(newValue)); //Persists the updated state in local storage since custom hooks run on every render
    }

    return [value, setStoredValue];
}
