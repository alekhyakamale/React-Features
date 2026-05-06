import React, {useState, useMemo, useCallback} from "react";

export default function PerformanceHooksUsage(){
    const [data, setData] = useState(0)

    const updateDataAgain = useCallback(() => {
        console.log(data)
    }, [data])

    return <Child1 updateDataAgain={updateDataAgain} />
}

const Child1 = React.memo(({data, updateDataAgain}) => {
    for(let i=0; i<100000; i++){}
    return <>
        <button onClick={updateDataAgain}>Click me</button>
    </>
})