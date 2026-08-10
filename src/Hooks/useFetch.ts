import { useState, useEffect } from "react"

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setData(null);
        setLoading(true);
        setError(null);
        const fetchData = async function () {
            try {
                const res = await fetch(url); //receiving stream of data
                const data: T = await res.json(); // need to wait till the stream fills the bucket
                setLoading(false);
                setData(data);
            }
            catch (error) {
                setError(error instanceof Error ? error : new Error(String(error)));
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error };
}