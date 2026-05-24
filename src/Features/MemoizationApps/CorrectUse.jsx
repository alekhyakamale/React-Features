import React, { useMemo, useState } from 'react'

export default function CorrectUse() {
    const [count, setCount] = useState(0);

    const calculatedResult = useMemo(() => {
        let tempResult = 0;
        for(let i = 0; i < 1000; i++){ 
            tempResult += count + i;
        }
        return tempResult; 
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

  return (
    <div>
        <button onClick={handleClick}>Click me!</button>
        <div>Derived Result: {calculatedResult}</div>
    </div>
  )
}