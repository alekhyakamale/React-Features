import { useEffect, useState } from "react";
import useDebounce from "../E-CommerceProblem/useDebounce";
import axios from "axios";

export default function RickAndMortySearch() {
    const [query, setQuery] = useState('');
    const searchText = useDebounce(query, 500);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!searchText) return;
        let ignore = false;
        const fetchData = async() => {
            try{
                setLoading(true);
                setError(null);
                const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchText}`);
                if(!ignore) setResponse(res.data);
            } catch(err){
                if(err){
                    setError(err.message)
                }
            } finally {
                 if(!ignore) setLoading(false);
            }
        }
        fetchData();
        return () => { ignore = true; }
    },[searchText])

    return (
        <>
            <input onChange={(e) => setQuery(e.target.value)} />
            {loading ? <p>loading...</p> : null}
            {error ? <p>{error}</p> : null}
            {response && (
                <ul>
                    {response.results.map((el) => (
                        <li key={el.id}>
                            {el.name}
                            <ul>
                                <li>Status: {el.status}</li>
                                <li>Species: {el.species}</li>
                                <li>Type: {el.type || "—"}</li>
                                <li>Gender: {el.gender}</li>
                                <li>Origin: {el.origin.name}</li>
                                <li>Location: {el.location.name}</li>
                                <li>Created: {el.created}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}