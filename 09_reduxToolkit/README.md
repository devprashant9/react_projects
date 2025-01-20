# Redux Tutorial Full Details 🤯

Redux is a library that is used for state management just like Context API but in a different way. Redux is not limited to react only it can be used with Angular, Vue and other frameworks as well. Redux is Predictable, Centralized, Debuggable and Flexible.

## Why Redux for State Management?

Redux also solves the problem which Context API does but in a more strict way. The problem statement is same i.e. to avoid unnecessary prop drilling and to create a global storage for states so that any component can access the state data. Redux is more abstract and it itself defines the way in which it will get updated.

## Basic Workflow of Redux?

Redux creates a single store or you can say objects that encloses all the states required by the application.

> 1. Apllication State

```javascript
store: {
    fState: {...},
    gState: {...},
    hState: {...},
    ...
}
```

> 2. Functions Known as **Reducers**

```javascript
function updateState() {
  // this is the function that updates the state
  // we cannot update the state directly
  // this is the most important concept of redux
}
```

> 3. Method to Notify State Change
>    The **subscribe()** method is used to notify changes if there is any change in state.

<hr />

First go to **"01_Basics"** folder of this project there you will find a few numbers of JS files go through them because they are all necessary to setup with **Redux**.

<u>**01_Index.js:**</u> This file will has a very simple code that you need to update a value of a property in a object. You will do it by **mutating the object**.

<u>**02_Index.js:**</u> Same task is to be done as done in **01_Index.js** but this time **without mutating the original object**.

<u>**03_Index.js:**</u> Detailed guide about **shallow copy** and this is the thing you need to understand how you can update object without mutating.

<u>**04_Index.js:**</u> This file informs you that how **Redux** wants you to update the changes in state.

<u>**05_Index.js:**</u> This file informs you that how **Redux** wants you to update the changes in state **with help of methods** so that you don't do anything directly.

<u>**05_Index.js:**</u> A plain and simple demo of **behind the scenes** that how states get updated in **Redux** through **reducers**.

<hr />

Create another folder and initialize it with node by following command in terminal **npm init -y** and it will create a **package.json** file in the folder.

Install **redux** and **parcel** by following commands in terminal **npm i redux parcel**.

Create **index.html** and **index.js** file and don't forget to add the **type="module"** when linking the JS file with HTML file.

Next run the file using the command **npx parcel index.html** and make sure you are in the correct folder.

Now take a look at the file **index.js** and **reduxInitial.js** and how actually the redux is put into code. There is so much of boilerplate.

```javascript
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

const store2 = createStore(reducerFunction);
console.log(store2.getState());

store2.subscribe(() => console.log(store2.getState()));

store2.dispatch({ type: INCREASE, payload: 2 });
store2.dispatch({ type: DECREASE, payload: 3 });
```

First thing **createStore** is deprecated method and should be only used for study purpose.

Next we have a **object** and it should be non-mutating thus assigned to **const** type. Here this newly created `object` is only reffered to as `state`.

Then we have the action type. For action type it is advised to keep them in a seperate files and the variable names should be in caps. It is just a convention.

<u>**`action:`**</u> The `action` is a plain javascript object and it has two **properties**, `type` and `payload`. The `type` helps to identify what type of change should be made in the state and the `payload` contains some value which is used to make the change in state value. Consider the example above.

Next we have a `reducer function` that has access to **state** and **action**.

<u>**`state:`**</u> It is just the object parameter that will receive the state and **it should be initialed to default state** so that the **getState()** don't returns undefined at first call.

Next we create a store my the method **`createStore`** imported from **`redux`** by passing the **`reducer function`**. While creating store **`state`** and **`action`** are automatically passed. Thus in general all the **`reducers`** have access to **`state`** and **`action`** parameter.

The **`createStore`** method returns quite a few numbers of **`methods`** out of which these are useful.

<u>**`getState():`**</u> Returns the current state and if the state is not initialized to any initial value then returns undefined for first time. Thus, state must be initialized with default value when it is received in the reducer function.

<u>**`dispatch(`<action object>`):`**</u> It takes the `action object` and dispatches it with `type` and `payload` property.

<u>**`subscribe(() => {}):`**</u> It takes a callback and automatically gets executed when any changes happens in the state so you don't need to manually write `console.log()` after each state change.
