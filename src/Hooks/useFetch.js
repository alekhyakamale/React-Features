import { useState, useEffect } from "react"

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setData(null);
        setLoading(true);
        setError(null);
        const fetchData = async function () {
            try {
                const res = await fetch(url); //receiving stream of data
                const data = await res.json(); // need to wait till the stream fills the bucket
                setLoading(false);
                setData(data);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error };
}