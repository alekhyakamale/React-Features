import React, {useCallback, useState} from "react"

// Custom hook — wraps the returned function in useCallback internally.
// The consumer gets a stable reference without needing to think about it.
function useGreeting() {
  const [greeting, setGreeting] = useState("");

  const greet = useCallback((name) => {
    setGreeting(`Hello, ${name}!`);
  }, []); // setGreeting is stable, so no deps needed

  return { greeting, greet };
}

export default function UseCallbackUsage(){
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // greet is already memoized inside the hook —
  // no useCallback needed here, just pass it straight to the child
  const { greeting, greet } = useGreeting();

  const handleClick = useCallback(() => {
    setValue("Kunal");
  }, [value, setValue]);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Value: {value}</p>
      <p>{greeting}</p>
      <SlowComponent handleClick={handleClick} onGreet={greet} />
    </div>
  );
};

const SlowComponent = React.memo(({ handleClick, onGreet }) => {

  // Intentially making the component slow
  for (let i = 0; i < 1000000000; i++) {}

  return (
    <div>
      <h1>Slow Component</h1>
      <button onClick={handleClick}>Set Value</button>
      <button onClick={() => onGreet("Alekhya")}>Greet</button>
    </div>
  );
});