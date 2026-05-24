import React, { useState, useEffect, useMemo, useCallback } from 'react'

// ❌ Bug 1: filterProducts runs on every render
// ❌ Bug 2: SortButton re-renders on every keystroke

const SortButton = React.memo(({ onSort }) => {
  console.log('SortButton rendered') // should only log when sort changes
  return <button onClick={onSort}>Sort by Price</button>
})

function filterProducts(products, query) {
  console.log('filtering...') // should not log on every keystroke
  return products.filter(p =>
    p.title.toLowerCase().includes(query?.toLowerCase())
  )
}

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [sortAsc, setSortAsc] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(r => r.json())
      .then(data => setProducts(data.products))
  }, [])

  // 🔧 Fix bug 1: memoize this
  const filtered = useMemo(() => filterProducts(products, query),[products, query]);

  // 🔧 Fix bug 2: memoize this
  const handleSort = useCallback(() => setSortAsc(prev => !prev), [sortAsc]);

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <SortButton onSort={handleSort} />
      <ul>
        {filtered.map(p => (
          <li key={p.id}>{p.title} — ${p.price}</li>
        ))}
      </ul>
    </div>
  )
}