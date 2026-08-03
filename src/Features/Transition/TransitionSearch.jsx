import { useState, useTransition } from 'react';

// Generate a massive list of dummy items
const massiveList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function TransitionSearch() {
    const [query, setQuery] = useState('');
    const [filteredList, setFilteredList] = useState(massiveList);
    const [isPending, startTransition] = useTransition()

    const handleChange = (e) => {
        const value = e.target.value;

        // The input updates here
        setQuery(value);
        // This heavy calculation blocks the UI!
        startTransition(() => {
            const filtered = massiveList.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredList(filtered);
        })
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Search 10,000 Items</h2>

            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Type to search..."
                style={{ padding: '8px', width: '300px', fontSize: '16px' }}
            />

            <ul style={{ marginTop: '20px' }}>
                {isPending ? (
                    <li>Loading...</li>
                ) : (
                    filteredList.map((item, index) => <li key={index}>{item}</li>)
                )}
            </ul>
        </div>
    );
}