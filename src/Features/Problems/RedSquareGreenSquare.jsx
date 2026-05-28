import React, { useState } from 'react'

const initialItems = [
  { id: 1, color: "red" },
  { id: 2, color: "green" },
  { id: 3, color: "red" }
]

export default function RedSquareGreenSquare() {
  const [arr, setArr] = useState(initialItems);
  const handleClick = (color) => {
    if (color.color === 'red') {
      setArr(prev => prev.filter(el => el.id !== color.id));
    } else if (color.color === "green"){
      const newId = arr.length > 0 ? Math.max(...arr.map(el => el.id)) + 1 : 1
      setArr(prev => [...prev.map(el => el.id === color.id ? {...el, color: "red"} : el), {id: newId, color: "green"}])
    }
  }
  return (
    <>
      {arr.map((color) => (
        <div
          key={color.id}
          onClick={() => handleClick(color)}
          style={{ height: '50px', width: '50px', border: '1px solid black', backgroundColor: color.color }}
        >
          {color.color}
        </div>
      ))}
    </>
  )
}
