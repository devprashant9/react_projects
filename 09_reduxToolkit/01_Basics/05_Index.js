// The Reducer
// Reducer can be any function that deal with the updation of state in redux

let myObj = {
  count: 0,
  name: "Prashant Kumar",
  age: 23,
};

function myFunc() {
  //   myObj = { ...myObj, age: 21 }; // redux don't want you to deal with state directly so this is not allowed
}

// redux will provide you with the state and want you to return the new state
function myFunc2(state) {
  return { ...myObj, age: 21 };
}

myObj = myFunc2(myObj);
console.log(myObj);

// ***************************************

function myFunc3(state, action) {
  console.log(action);
}

myObj = myFunc3(myObj);
console.log(myObj, { type: "post/increase" });



// action is plain javascript object like below
/*
        let action = {
            type: 'increase,
            payload: 1000,
        }
 */
