import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <h1>Counter with Custom Hook: {counter}</h1>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => increment(2)}
      >
        +2
      </button>
      <button type="button" className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => decrement(2)}
      >
        -2
      </button>
    </>
  );
};
