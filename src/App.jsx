import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/useSlice";

const App = () => {
  let count = useSelector((state) => state.count.value);
  // console.log(count);
  let dispatch = useDispatch();

  return (
    <>
      <p>{count}</p>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        <button onClick={() => dispatch(increment(2))}>Increment</button>

        <button onClick={() => dispatch(decrement(5))}>Decrement</button>
      </div>
    </>
  );
};

export default App;
