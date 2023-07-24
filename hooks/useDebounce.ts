import { useState, useEffect } from 'react'

// Only when user stop typing in the search bar we call the api after 500ms
export default function useDebounce<T>(value: T, delay?: number) {
    const [debounceValue, setDebounceValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debounceValue
}
