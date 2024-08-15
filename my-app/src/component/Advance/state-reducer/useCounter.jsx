import { useReducer } from "react";

const counterReducer = ({ count }, { type }) => {
  switch (type) {
    case "INCREMENT":
      return { count: count + 1 };
    case "DECREMENT":
      return { count: count - 1 };

    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
export default function useCounter(
  { initial = 0 } = {},
  reducer = counterReducer
) {
  const [{ count }, dispatch] = useReducer(reducer, { count: initial });
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return { count, handleIncrement, handleDecrement };
}
useCounter.reducer = counterReducer;
