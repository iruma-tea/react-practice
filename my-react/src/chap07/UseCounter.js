import { useReducer, useDebugValue } from "react";

export default function useCounter(init, step) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "update":
          return { count: state.count + action.step };
        case "reset":
          return { count: action.init };
        default:
          return state;
      }
    },
    {
      count: init,
    }
  );

  useDebugValue(state.count >= 10 ? "10 Over" : "10 Less");
  const handlerUp = () => dispatch({ type: "update", step });
  const handlerDown = () => dispatch({ type: "update", step: -step });
  const handlerReset = () => dispatch({ type: "reset", init });

  return [state, handlerUp, handlerDown, handlerReset];
}
