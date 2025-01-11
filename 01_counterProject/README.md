# Counter Project Full Details 🤯

So first of all I made this **Counter Project** all by myself after learning react from various sources. But what is the **proof** that I totally made it all by myself?

Now, if you will take a closer look then I have made a components folder where I have made 6 components for different sections of this project and one of them is a resuable component.

Now this project could be easily done in **App.jsx** but I made it complex by building different components for different sections even the **state** is defined in other component and being populated in other and same goes for **Button Click** also.

In **BodyCard.jsx** I have passed **counter** as a prop to **Section2.jsx** and **handlClick** function reference to **Section3.jsx**.

**Section3.jsx** is further passing the **handlClick** function to **Button.jsx** and this continue flow of passing props from parent to children component is known as **Prop Drilling**.

Now **Button.jsx** actually executes the function **handleClick** which is triggered back and finally executed in **BodyCard.jsx** and this process is known as **Lifting-The-State-Up**.

## Why is handleClick Method is Defined in BodyCard.jsx and NOT in Section3.jsx?

So, the state variable is used by **Section2.jsx** and also by **Section3.jsx**. In such cases it is advised to keep the state variable to the closest ancestor parent of both the Components.

### Problem I Faced in This Project

When you try to create a basic project from scratch for the first time then you will definetly come across with thousands of coding mistakes. Firstly, Because I made up quite a few components, It became very confusing where to render what and how to apply component resuability.

### Lessons From This Project

If you are trying to build a resuable component first design it and look for what similar kind of prop you will be receiving so that you can make that component resuable. In my case the **Button.jsx** was receiving a **text** and **handleClick** function as a prop therefore it was treated like a resuable component. So think in a backward manner.
