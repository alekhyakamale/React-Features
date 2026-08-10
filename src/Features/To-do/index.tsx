import { ReactElement, useState } from 'react'
import useLocalStorage from './useLocalStorage';

type TodoItem = {
    id: string;
    item: string;
}

export default function Todo(): ReactElement {

    const [item, setItem] = useState<string>('');
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const [itemsArray, setItemsArray] = useLocalStorage<TodoItem[]>('todo-items', [])

    const handleSelect = (id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
        )
    }

    const handleDelete = () => {
        setItemsArray(itemsArray.filter((el) => !selectedIds.includes(el.id)))
        setSelectedIds([])
    }

    const handleAdd = () => {
        if (!item.trim()) return
        const id = crypto.randomUUID();
        setItemsArray([...itemsArray, { id, item }])
        setItem('')
    }

    return (
        <>
            <input onChange={(e) => setItem(e.target.value)} value={item} />
            <button type="button" onClick={handleAdd}>Add</button>
            <ul>
                {itemsArray.map((el) => (
                    <li key={el.id}>
                        <input
                            type="checkbox"
                            checked={selectedIds.includes(el.id)}
                            onChange={() => handleSelect(el.id)}
                        />
                        {el.item}
                    </li>
                ))}
            </ul>
            <button type="button" onClick={handleDelete}>Delete</button>
        </>
    )
}
