// Shallow Copy

const fruits = ['mango', 'apple', 'orange'];
const myFruits = fruits;
myFruits.push('dates');
myFruits.push('grapes');

// the above code updates both the array
// same thing applies to object also

//****************************************************** */
const user = {
    firstName: 'Prashant',
    lastName: 'Kumar',
}

const myUser = user;
myUser.lastName = 'Pandey'; // updates the "user" also

// **************************************************************

const username1 = 'Prashant';
let username2 = username1;
username2 += ' Jha'; // this assigns a new memory to "username2" an thus it don't affect "username1"

// ***************************************************************

const user1 = {
    firstName: "Prashant",
    lastName: "Jha",
}
const user2 = {};
Object.assign(user2, user1);

// now user1 and user2 points to different memory 

user2.lastName = "Kumar"; // this only updates user2 and not user1

