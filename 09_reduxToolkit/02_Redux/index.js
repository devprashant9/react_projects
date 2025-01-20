import { createStore } from "redux";

console.dir(createStore);

// ====================================================

const store1 = createStore(function () {});
console.log(store1);
console.log(store1.getState()); // Gives the "Current State". So it is mandatory to give initial state in reducer function or else returns undefined
console.log("=========== Store 1 Ends Here =========");

// ====================================================

const reduxInitialState = {
  name: "Prashant",
  age: 20,
};

function reducerFunction(state = reduxInitialState, action) {
  if (action.type == "increase")
    return { ...state, age: state.age + action.payload };
  else if (action.type == "decrease")
    return { ...state, age: state.age - action.payload };
  return state;
}

const store2 = createStore(reducerFunction); // state and action are automatically passed. means every reducer has access to "state" and "action"
console.log(store2);

console.log(store2.getState()); // Current State

store2.subscribe(() => console.log(store2.getState())); // the subscribe method gets automatically called when a action is dispatched. Thus no need to write console.log() multiple times.

store2.dispatch({ type: "increase", payload: 2 });
// console.log(store2.getState());

store2.dispatch({ type: "decrease", payload: 3 });
// console.log(store2.getState());
