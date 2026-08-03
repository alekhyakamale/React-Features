import React, { useEffect, useState } from 'react'

export default function useDebounce(searchText, delay) {
      const [search, setSearch] = useState("")

      useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(searchText)
        }, delay)

        return () => clearTimeout(timer);
      }, [searchText]);

      return search;
}
