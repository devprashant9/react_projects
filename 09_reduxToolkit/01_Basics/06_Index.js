// Understanding the reducer
// Reducer is any function that can cause change in state
// It has 2 arguments "state" and "action"
// state: It is the actual data
// action: It is plain JS object which have "type" and "payload" property
// the "type" property helps us to know what kind of operation is to be performed
// the "payload" property consist of some data which you can used to manipulate state value

// ======================== Action Without Payload ================

let reduxState = {
  name: "Prashant",
  age: 20,
};

console.log(reduxState);

function ageIncreaseDecrease1(state, action) {
  if (action.type === "age/increase") {
    return { ...state, age: state.age + 1 }; // 21
  } else if (action.type === "age/decrease") {
    return { ...state, age: state.age - 1 }; // 19
  }
  return state;
}

let action1 = {
  type: "age/increase",
};

let action2 = {
  type: "age/decrease",
};

let action3 = {
  type: "random/action",
};

let myObj1 = ageIncreaseDecrease1(reduxState, action1);
let myObj2 = ageIncreaseDecrease1(reduxState, action2);
let myObj3 = ageIncreaseDecrease1(reduxState, action3);

// ======================== Action With Payload ====================

function ageIncreaseDecrease2(state, action) {
  if (action.type === "age/increase/by/2") {
    return { ...state, age: state.age + action.payload }; // 22
  } else if (action.type === "age/decrease/by/3") {
    return { ...state, age: state.age - action.payload }; // 17
  }
  return state;
}

let action4 = {
  type: "age/increase/by/2",
  payload: 2,
};

let action5 = {
  type: "age/decrease/by/3",
  payload: 3,
};

let myObj4 = ageIncreaseDecrease2(reduxState, action4);
let myObj5 = ageIncreaseDecrease2(reduxState, action5);
