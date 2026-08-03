import React, { useState, useEffect } from 'react'
import useDebounce from '../Hooks/useDebounce'

export default function DebounceSearchWithCancellation() {
    const [query, setQuery] = useState("")
    const searchText = useDebounce(query, 3000)

    useEffect(() => {
        if (!searchText) return;
        const fetchResults = async() => {
            try {
                const data = await fetch('/someUrl');
                const res = await data.json();
            }
            catch(e) {
                console.log("error: ",e);
            }
        }
    }, [searchText])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

  return (
    <div>
        <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  )
}
