import React, { useState } from 'react'

export default function Todo2() {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [selectedIds, setSelectedIds] = useState([])

    const handleAdd = () => {
        if(!value) return;
        const id = crypto.randomUUID();
        setList((prev) => [...prev, {id, value}])
        setValue('')
    }
    const handleCheck = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
        )
    }

    const handleDelete = () => {
        setList(list.filter(el => !selectedIds.includes(el.id)))
        setSelectedIds([])
    }

  return (<div>
        <input onChange={(e) => setValue(e.target.value)} value={value}/>
        <button onClick={handleAdd}>add</button>
        <ul>
            {
                list.map((task) => <li key={task.id}>
                    <input type='checkbox' onChange={(e) => handleCheck(task.id)} />
                    {task.value}
                </li>)
            }
        </ul>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
