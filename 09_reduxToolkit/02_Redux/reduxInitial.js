// The final Code When Redux Was USed

import { createStore } from "redux";

const reduxInitialState = {
  name: "Prashant",
  age: 20,
};

// The below 2 lines were to be kept in seperate files, according to convention
const INCREASE = "age/increase"; // writing convention
const DECREASE = "age/decrease"; // writing convention

// Use switch-case instead of if-else ladder
function reducerFunction(state = reduxInitialState, action) {
  if (action.type === INCREASE)
    return { ...state, age: state.age + action.payload };
  else if (action.type === DECREASE)
    return { ...state, age: state.age - action.payload };
  return state;
}

const store2 = createStore(reducerFunction);
console.log(store2.getState());

store2.subscribe(() => console.log(store2.getState()));

store2.dispatch({ type: INCREASE, payload: 2 });
store2.dispatch({ type: DECREASE, payload: 3 });
