import useDebounce from "./useDebounce";
import useProducts from "./useProducts"

export default function ProductPage() {

    const { user, products } = useProducts();
    const [queryText, setQueryText] = useState("")
    const search = useDebounce(queryText);
    const [category, setCategory] = useState("All")
    const [sortOrder, setSortOrder] = useState("asc")
    const [saved, setSaved] = useState([])
    
    const filtered = useMemo(() => {
        return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .filter(p => category === "All" || p.category === category)
        .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price)
    }, [category, sortOrder, products, search])

    const handleSave = useCallback((productId) => {
        setSaved(prev => [...prev, productId])
    }, [])

    return (
        <div>
            <header>
                <span>{user?.name}</span>
                <span>Saved: {saved.length}</span>
            </header>

            <input value={queryText} onChange={e => setQueryText(e.target.value)} />

            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option>All</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Food</option>
            </select>

            <button onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}>
                Sort: {sortOrder}
            </button>

            {filtered.map(product => (
                <ProductCard key={product.id} product={product} onSave={handleSave} />
            ))}
        </div>
    )
}