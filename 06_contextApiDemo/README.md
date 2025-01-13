# Context API Demo Project Full Details 🤯

We know that data flow in react are unidirectional. Only parent component can pass props to child component and reverse is not possible. With the use of **useContext** hook we can create a global reference to a state variable and any component that want to use it can just invoke the **context** and can take access to it. It helps to eliminiate unwanted props passing to child components that actually don't need the prop. Consider the below example, it might not be correct but take a look at the prop flow from parent to to child component that actually requires the prop.

```jsx
<Header data="page">
  <Navigation data="page">
    <Link>Link 1</Link>
    <Link>Link 2</Link>
    <Link data="page">
      <Page>{data}</Page>
    </Link>
  </Navigation>
</Header>
```

Now, in the above example the **data** is passed from **Header** to **Page**. But same prop was also passed to **Navigation** and **Link** so that it can reach the nested child component **Page**. However **Navigation** and **Link** aren't doing anything with this prop. They are just passing it down further. So imagine if you have a quite a few number of props, will this prop drilling process would be feaseable? Absolutely Not.

Thus we will create a **context** at global level so that any component that want to access the data can directly acces it with the help of **useContext** hook.

## How to Implement Context API in Project?

As a beginner flow the steps and take a look at necessary files of this project which are mentioned below.

### Step 1:

First create a pure **js** file and create **createContext()** inside it as created in **context** folder, inside **src** folder of this project. The file name is **UserContext.js**.

### Step 2:

Now this step totally belongs to you. You need to wrap all the components inside the **createContext()** provider so that all of them have access to **global data** and make sure to render the **children prop** as it will contain all sub components. Take a look at file **UserContextProvider.jsx** in **context folder** inside **src** folder. Also you need to pass the **global data** to this context wrapper as a prop so that all children component can access it.

Also you need to pass some data as prop in **context provider** so children component can have access to it and it is done by passing data to **value prop**.

### Step 3

Now wrap the **App.jsx** or **main.jsx** with **UserContextProvider.jsx** and render the child component as required. Take a look at **App** component of this project.

### Step 4

Now you can set data to the context provider and can also get data. Take a look at **Login.jsx** in order to set data to global variable and **Profile.jsx** to get data from the global variable.

## Important Note Regarding to useState

When you are using **useState** hook for controlled component like **input** always initialize it with empty string for string values and with **0** for number values. Always **initialize** the **useState** hook for primitive data. Not initializing for controlled elements will give you **warning** in console like below.

> Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components Error Component Stack <br />
> at input (<anonymous>) <br />
> at div (<anonymous>) <br />
> at Login (Login.jsx:6:35) <br />
> at UserContextProvider (UserContextProvider.jsx:4:32) <br />
> at App (<anonymous>)

## Can **null** be Used to Initialize the Hook?

You can use **null** type to initialize the **useState** hook when you know what the actual data is or the type of actual data that you are going to store. In case of unknown it is better to initialize it with null.

## Why it Gives Warning in the Console?

This is the behavior of `useState` if you do not initialize it. Here's why:

1. When you create a state variable with `useState()` and don't provide an initial value, the default value is `undefined`.

   ```javascript
   const [username, setUsername] = useState();
   // username is undefined initially
   ```

2. React treats inputs with an `undefined` or `null` `value` as **uncontrolled** because there is no value explicitly provided. In this case, the input's state is managed by the DOM (uncontrolled).

3. When you update the state (e.g., on user input), React assigns a defined value to the `value` prop of the input, making it **controlled**. Switching from uncontrolled to controlled triggers the warning.

4. To avoid this, always initialize `useState` with a value that matches the expected type for the input:
   - For text inputs, initialize with an empty string (`""`).
   - For checkboxes, initialize with `false`.
   - For numbers, initialize with `0`.

By initializing the state with a proper default value, the input will remain controlled throughout the component's lifecycle, preventing the warning.
