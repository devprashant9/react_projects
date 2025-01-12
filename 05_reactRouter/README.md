# React Router Project Full Details 🤯

The first thing we need to take into account is that **react-router** is a library that is used in web apps to create routes so that user can interact with the website. The use **a tag** is not allowed because it refreshes the page which should not be the case for a react application. To overcome such problems we use **react-router**. Check out the installation guide for libraries. [React Router Installation Library](https://reactrouter.com/start/library/installation)

## Naviagtion in React Routeer

> [Check This Doc](https://reactrouter.com/start/library/navigating)

### 1. Link in React Router

The **Link** tag in react-router works same as **a** tag in HTML but it has **to** attribute where the path is specified. Used when we have no inter-related items. Like, the clickable webiste logo.

```jsx
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
</ul>
```

### 2. NavLink in React Router

The **NavLink** tag in react-router works same as **Link** tag with one difference. The **NavLink** also has a flag property and it displays the active items on the UI. So if you have multiple items and you want to give user a good experience that currently they are on which item then this tag is very useful. Take a look that **isActive** is being destructured from object so those braces are necessary or else it won't work. Below is the example.

```jsx
<ul>
  <li>
    <NavLink
      to="/"
      className={({ isActive }) => `text-black ${isActive ? "text-red" : ""}`}
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/about" className={({ isActive }) => ``}>
      About
    </NavLink>
  </li>
</ul>
```

### 3. useNavigate in React Router

Since, it starts with **use** it is a hook. This hook helps to naviagte without any user interaction. But why you wan't to do so. Below are the scenarios.

- when a form is submitted you need to redirect a user to somewhere without their interaction.
- while desigining a quizz app when you want to move to next question as soon as the alloted time for a question ends.
- when you want to logout a user because of their inactivity.

> Now if you use them all and try to run your application it will crash. You need to provide a context and routing paths to component also, so that they are rendered at specified routes.

## What is an Outlet?

An **Outlet** is a tag from **react-router** which helps to render **child component** inside **parent**.

Consider a example that I have a **Header** and **Footer** component and I want to render **Home, About, Contact** component on different routes. However, I can say that my **Header** and **Footer** component will be constant for each route. Thus if I provide a **Outlet** between them then it will help me to render my components at different routes. Example below: Consider this component as **Layout.jsx**.

```jsx
    <Header />
        <Outlet />
    <Footer />
```

Obviously you can call **Header** and **Footer** component at each routes but that is not a optimized approach

## What is RouterProvider?

**RouteProvider** is like a context which takes in all route parameters and whenever user wants to navigate it tells the application what to render. **YOUR PROJECT WONT RUN WITHHOUT THIS**. Wrapping **Layout.jsx** with **RouterProvider**.

```jsx
<RouterProvider myRouter={router}>
  <Layout />
</RouterProvider>
```

Now, you might be thinking there is a **router** variable, and it came from where. Obviously we need to implement the functionality of it.

## What is createBrowserRouter?

In react-router all the paths passed to the **RouterProvider** is created using **createBrowserRouter** in the following way. There are two ways of creating it. You may follow whichever you find easy. Also not that **Child Component** don't need **/** in their path and you must pass absolute path to them. Also an asterisk(\*) in path means all the path which have not yet been defined.

### Method 1

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/github",
        element: <GitHub />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
```

### Method 2

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<GitHub />} />
    </Route>
  )
);
```

## What is useParams?

It is a hook in react-roter that lets you capture route parameters. Suppose you created the following route:

> /users/:id <br/>
> users/:id/:name

Now if a user hits the following url

> /users/1 <br/>
> /users/1/prashant

You will get the following result:

> id: "1"<br/>
> id: "1", name: "prashant",

In order to use this in your component you can do it in following way.

```jsx
const { id } = useParams();
const { id, name } = useParams();
```

> Important point to note that use same variable name that you provided while creating route to destructure. Writing the field as **id** does not gurantee it will be a number it will accept all the values passed and before usage make sure to validate them.

[Explore More URL Values at React Router Docs](https://reactrouter.com/start/library/url-values)