# useState Project Full Details 🤯

> useState Hook Syntax: <br/>

    const [counter, setCounter] = useState(initial value);

Here, **counter** is the variable and **setCounter** is the function that is used to manipulate the **counter** variable. You can pass anything as a **initial value** which is assigned to **counter** variable.

Now, if you want to increase the **counter** then you must do it using **setCounter** method because it will affect the UI and we know that UI is the game of React.

## Important Things About **setCounter** Function

- **setCounter** method is **async** in nature therefore sometimes the expected result may not be the same.
- If you try to log **counter** value just after incrementing it by 1, then it will log the previous value, because it works on **closures** and update is done at the time of **re-render** of component.
- **setCounter** sends update in batches thus if you try to perform multiple updates then also there will be only 1 update in the UI.
- **setCounter** take a call-back as argument which is mostly used when our current value of **counter** is dependent upon **previous value**. **setCounter** has access to previous value in the callback.
- We can pass any value as **initial value**. Like it can be _null, string, number, array, object, function reference, anything_.

> If you see that you console is logging something twice then it is because of the strict mode wrapper in **main.jsx** and it is for development purpose.

### STATES IN REACT MUST BE IMMUTABLE. WE KNOW THAT ARRAY AND OBJECTS CAN BE MUTATED BUT WE NEED TO MAKE SURE THAT THEY ALWAYS REMAIN IMMUTABLE.
