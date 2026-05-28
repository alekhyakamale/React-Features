import React, { useEffect } from 'react'

export default function useDebounce(searchText) {
      const [search, setSearch] = useState("")

      useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(searchText)
        }, 400)

        return clearTimeout(timer);
      }, [searchText]);

      return search;
}
