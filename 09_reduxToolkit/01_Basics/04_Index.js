// How Redux Wants us to Update States
// However there is a catch in this way also

let myObj = {
    count: 0,
    name: 'Prashant Kumar',
    age: 23,
}

console.log(myObj); // prints the above object

myObj = {...myObj, age: 21,}; //this doesn't modify the original object

console.log(myObj); // prints updated object