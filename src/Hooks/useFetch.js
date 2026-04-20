import { useState, useEffect } from "react"

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const fetchData = async function () {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setLoading(false);
                setData(data);
            }
            catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error };
}