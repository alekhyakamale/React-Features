import { useState, useEffect, useRef } from 'react'

// 🔧 Build this
function useDebounce(value, delay) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if(!value) return;
    const timer = setTimeout(() => {
        setQuery(value)
    }, delay)
    return () => clearTimeout(timer);
  }, [value, delay]);
  return query;
}

// 🔧 Build this — useRef + useEffect only
function usePreviousValue(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function mockSearch(query) {
  console.log(`API called with: "${query}"`)
  return Promise.resolve([`Result for "${query}"`])
}

export default function SearchPanel() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const debouncedQuery = useDebounce(query, 400)
  const previousQuery = usePreviousValue(debouncedQuery)
  console.log(debouncedQuery, previousQuery);

  useEffect(() => {
    if (!debouncedQuery) return
    mockSearch(debouncedQuery).then(setResults)
  }, [debouncedQuery])

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <ul>
          {results.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
      <aside>
        <p>Current: {debouncedQuery || '—'}</p>
        <p>Last searched: {previousQuery || '—'}</p>
      </aside>
    </div>
  )
}