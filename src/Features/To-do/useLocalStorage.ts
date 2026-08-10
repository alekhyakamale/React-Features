import { useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (newValue: T) => void] {
    const [value, setValue] = useState<T>(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue
    })

    const setStoredValue = (newValue: T) => {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [value, setStoredValue];
}
