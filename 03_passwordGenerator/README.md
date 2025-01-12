# Password Generator Project Full Details 🤯

So in this project 3 hooks have been used let us discuss it one by one in very short for a full detail and explanation please checkout docs at official website.

**1. useCallback():** This hook in react is used to **memoize** the method that needs to be executed frequently means it basically caches the frequently used method. So, if there are some methods that needs to be executed on frequent change then to optimize performance this hook is used. It takes two arguments, function to be memoized and a dependency array which triggers the memoized method when there is any change in the dependency list. [React Docs useCallback Hook](https://react.dev/reference/react/useCallback)

**2. useEffect():** Now this hook also take two arguments. First is the setup and second is the dependency array. Do not confuse it with **useCallback** hook. The **useEffect** hook is used to keep your application synchronized with external sources by doing some side effects. It also has a cleanup function that is ran when a component is **unmounted**.

Now the dependency array in **useEffect** plays a very crucial role in order to execute setup function. If you don't pass any array it will execute every time some things happen on UI. If you pass an empty array it will run only when the page starts to load for the first time. Obviously, if you pass some dependency list then it will run if there is change in the state of the dependency list.

In **useEffect** the cleanup function runs when the component is **unmounted** before the new state component **mounts**. It is basically done to prevent  resource leakage and such other things that might hurt the website performance.

If you are passing any default value in your **useState** initial value then **useEffect** runs for that value also because the component is **mounted**.

The **useEffect** hook is simple yet complex to understand so you must checkout the doc atleast once. [React Docs useEffect Hook](https://react.dev/reference/react/useEffect)

**3. useRef:** The **useRef** hook is used to reference a value and it takes initial value as an argument. This has been used in the project to copy the final value of the input and to show the copy password text in highlighted format. A **ref** attribute must be provided in order to set up the communication between the hook and the field whose final value you want to access. Properties of **useRef** can be mutated but if it is an object it shouldn't be done. This hook does not causes re-render.

Note: The **useRef** hook is not used to copy the password it is done using properties available in window object. Also, since we are using it for client side it has direct access to **window object** but it may not have access to it in server side frameworks. Now, when to use this hook and when not to and what all things can happen if not used properly for that give a read to this doc. [React Docs useRef Hook](https://react.dev/reference/react/useRef)

## Handling Form Fields in React
In react you do not directly control the fields that are present in the forms like *input, range, checkboxex, radio buttons, etc.*. All these should be accompanied by some state because when some changes happens to the you neewd to update the UI and UI is the React's game. So, you should always use two attribute **value** and **onChange** event with each fields. These two are always used to keep a sync with the state variable.

## Why useCallback is Used With passwordGenerator Function?
The **passwordGenerator** function is generating the random password for me and it can be absolutely done without using **useCallback** hook but react is all about optimization. I want this method to run when the page loads, or when user checks the numbers or characters or when there is change in length. So same function needs to be executed multiple times. Will it not be better if react alreday has this method cached after first render? And that is exactly the case why we are using this hook to wrap **passwordGenerator** method. And dependency array are the list of parameters tells react when to create the memoized method if there is any change. If there is no change then previously created method is used.

## Why useEffect is Used?
In my project **useEffect** hook is calling the **passwordGenerator** method when the page loads. So, my input field does not remains empty on page load and whenever there is some change in any of the dependency array list it again invokes the **passwordGenerator** method.

## You Must Know Math.random()

**Math.round(Math.random() * 15):** Will always give a number between 0 to 15
**Math.round(Math.random() * 15 + 1):** Will always give a number between 1 to 15