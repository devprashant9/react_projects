// Redux says don't mutate the state like done in "01_Index.js"
// Do the same thing this time but without mutating the state

let state = {
  count: 0,
};

let stateCopy = state; // it copies the reference i.e. only the address thus "stateCopy" also points to same object as of now

function increaseCount() {
  state = {
    count: state.count + 1,
  };
  return state.count;
}

// how is this non-mutating

/* See the object reference is not same this time because "state" now points to the new object and "stateCopy" still points to the old object

And we know that JS object does not allow duplicate entry of property-value thus the "count" property will override the existing "count" property */

console.log(increaseCount());
console.log(increaseCount());
console.log(increaseCount());
console.log(stateCopy); // count will be 0
console.log(state); // count will be tnree

// If you didn't get this then it's time to know "Shallow Copy and Deep Copy"
