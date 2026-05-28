import React from 'react'

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/api/products").then(r => r.json()).then(setProducts)
        fetch("/api/user").then(r => r.json()).then(setUser)
    }, [])

    return { products, user };
}
