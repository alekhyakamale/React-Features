import React, { useState, useTransition } from 'react'

export default function TransitionApp() {
    const [value, setValue] = useState("");
    const [list, setList] = useState([])
    const [isPending, startTransition] = useTransition()

    const LIST_SIZE = 20000;

 const handleChange = (e) => {
    startTransition(() => {
        setValue(e.target.value)
        const arr = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            arr.push(e.target.value)
        }
        setList(arr);
    })
}
    return (
        <div>
            <input onChange={handleChange} />
            {isPending ? "Loading..." : list.map((l, i) => (
                <div key={i}>{l}</div>
            ))}
        </div>
    )
}
