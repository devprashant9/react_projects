// You need to update the "count" value by 1 in  the "state" object


let state = {
    count: 0,
}

// Q1: Update the count by 1 and print the state

// Solution Q1:
state.count = 1;
console.log(state.count);

// Q2: Keep updating count by 1

// Solution of Q2 Simple Way
state.count = state.count + 1;
state.count = state.count + 1;
state.count = state.count + 1;
console.log(state.count);

// Solution of Q2 using Function
function increaseCount(){
    return state.count = state.count + 1;
}
console.log(increaseCount());
console.log(increaseCount());
console.log(increaseCount());


// The problem is the reference of the "state" variable is not getting changed even on updating some of it's property. Because the reference is same "React" thinks that no change has occurred and thus it does not update the UI.