import { customCreateStore } from "./myRedux.js";

const obj = {
  name: "Prashant",
  age: 22,
};

function myReducer(state = obj, action) {
  switch (action.type) {
    case "increase":
      return { ...state, age: state.age + action.payload };

    case "decrease":
      return { ...state, age: state.age - action.payload };

    default:
      return state;
  }
}

const myStore = customCreateStore(myReducer);

console.log(myStore.getState());
myStore.subscribe(() => console.log(myStore.getState()));

const subscribe = myStore.subscribe(() =>
  console.log("I am Subscribe Method 2")
);

myStore.dispatch({ type: "increase", payload: 2 });
subscribe();

myStore.dispatch({ type: "decrease", payload: 3 });
