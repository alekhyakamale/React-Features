import { useEffect, useState } from "react";


export default function useDebounce(query, delay){
    const [text, setText] = useState("");

    useEffect(() => {
        if(!query) return;
        const timer = setTimeout(() => {
            setText(query)
        }, delay);

        return () => clearTimeout(timer)
    }, [query, delay])

    return text;
}