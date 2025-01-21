# Making Our Own Redux Full Details 🤯

**`01_reduxDevTools:`** This `folder` demonstrates how can you connect your application with **Redux Dev Tools**. It is a chrome extension which helps you to visualze changes in state.

```javascript
const store = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
```

Whle creating `store` you can use a second argument with reducer method as shown above to connect your application with **redux dev tools**. Make sure that you connect it using **optional selection** because it will only work if there is **redux dev tool** installed in browser or else your application should not crash and must be display some output.

**`02_ownRedux:`** Here we are trying to create our own **minimal** redux with following functionalities only `createStore()`, `getState()`, `dispatch()` and `subscribe()`. We will also implement the `unsubscribe()` method that is returned by `subscribe()` which helps to remove the listener.

Below is the implementation of **Custom Redux**.

```javascript
export function customCreateStore(reducer) {
  let state;
  const listeners = [];
  const store = {
    getState: () => {
      return state;
    },
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener()); // used to implement subscribe()
    },
    subscribe: (listener) => {
      listeners.push(listener);
      return function () {
        // used to implement unsuscribe()
        const listenerndex = listeners.findIndex(
          (registeredListener) => registeredListener === listener
        );
        listeners.splice(listenerndex, 1);
      };
    },
  };
  store.dispatch({ type: "@@INIT" }); // by default this is dispatched and instaed of "@@INIT" you can write any name
  return store;
}
```

**`customCreateStore(reducer)`:** It is a function that receives a parameter **`reducer`** which is a function and it has 2 variables and 3 methods.

**`state`:** This variable is used to keep track of the values upon any changes.

**`listeners`:** It is an array which is used to store all the `callback` that is passed to `subscribe` method and obviously the `subscribe` method can be called any number of times with different `callback`.

**`getState()`:** It does nothing but simpply **returns current state**.

**`dispatch(action)`:** This method receives a plain object known as `action` and assigns the `state` to that `reducer` function and also passes the `state and action` to reducer function.

> Now, whatever has been written in the `reducer` function it gets evaluated and based on that `state` is initialized to that value. Therefore, `reducer` function always needs to return the `state` and if no changes occurred then also it needs to return the `initial state` so that the `store` has always the updated state. Take a look at the following code and just focus on the `myReducer` method and the `return` statement.

```javascript
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
```

**`subscribe(listener)`:** This method is invoked whenever there is any change in the state and `listener` is a `callbcak`. The subscribe method can have any number of `listeners` thus it is stored in an array and whenever any `new listener` is created it gets pushed into the array.

Now, we need the mechanism that all the `listener` in the subscribe method should automatically get `invoked` when there is any change in the `state` that is why it is invoked after `dispatch()` method.

```javascript

dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener()); // used to invoke all callback inside subscribe() after each dispatch
    },
```

Now, the `subscribe()` method also returns a `function` that is used to remove a particular `callbcak`. Take a look at the following code.

```javascript
subscribe: (listener) => {
      listeners.push(listener);

      return function () { // used to implement unsuscribe()
        const listenerndex = listeners.findIndex(
          (registeredListener) => registeredListener === listener
        );
        listeners.splice(listenerndex, 1);
      };
    },
```

When you store the `subscribe()` method in a variable the `function` returned gets stored in that variable. This `function inside return` is trying to get the **index** of `callback` and then **removing** it from the **listeners array** and thus `splice` method is used so that actual array gets modified. Thus next time `dispatch` is called the method which has been removed from the **listeners array** will not get invoked. Take a look at the below code to understand all functionality.

```javascript
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

const unsubscribe = myStore.subscribe(() =>
  console.log("I am Subscribe Method 2");
);

myStore.dispatch({ type: "increase", payload: 2 });
unsubscribe(); // gets removed after first dispatch

myStore.dispatch({ type: "decrease", payload: 3 });
```
