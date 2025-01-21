import { createStore } from "redux";

const reduxInitialState = {
  name: "Prashant",
  age: 20,
};

const INCREASE = "age/increase";
const DECREASE = "age/decrease";

function reducerFunction(state = reduxInitialState, action) {
  if (action.type === INCREASE)
    return { ...state, age: state.age + action.payload };
  else if (action.type === DECREASE)
    return { ...state, age: state.age - action.payload };
  return state;
}

const store2 = createStore(
  reducerFunction,
  window.__REDUX_DEVTOOLS_EXTENSION__?.() //store enhancer
);
console.log(store2.getState());

store2.subscribe(() => console.log(store2.getState()));

store2.dispatch({ type: INCREASE, payload: 2 });
store2.dispatch({ type: DECREASE, payload: 3 });
