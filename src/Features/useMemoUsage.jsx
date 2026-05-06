import { useState, useMemo } from "react"

function calculate() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }
    return result;
}

export default function UseMemoUsage(){
    const [count, setCount] = useState(0);
    const [dependentCount, setDependentCount] = useState(10);

    const value = useMemo(calculate, [dependentCount]);

    return (
        <div className="App">
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>
            <button onClick={() => setDependentCount(dependentCount + 1)}>
                Increment Dependent Count
            </button>
            <p>Dependent Count: {dependentCount}</p>
        </div>
    );
}