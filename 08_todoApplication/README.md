# ToDo Application Project Using Context API Full Details 🤯

So, this project uses **Context API** but in a more precised way, means actually how the **Contexts** are first defined and initialized and the component were all the actual functionality are written.

Focus on the type of data that is going to be stored because it plays a very crucial role when you are making any changes or adding any data. If you are taking inputs as array of objects but you are somewhere manipulating the array only then it might give you uncertain error or the output may not be as expected.

## Here is The Simple File to Create Any Type of Context

```javascript
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
```

First we are creating a context which is a method that has certain arguments, like type of data we are storing and all the methods definition that is going to be implemented.

> The data in **todos** is a sample object that is going to be stored in that array so that we can visualize what are the property and values that is going to be included with all todos.

Next, we create a **Provider** with the context name which is simply used to wrap up. This is also optional in this file you can directly like the **ContextName.Provider** where you want to wrap up the **context**. But don't forget to pass the **value prop**.

Then there is a custom hook which is optional but it is a more standard and industry specific approach.

> Make sure to use the same variable names and method signature when implementing the task like the code below or else it will give error.

```javascript
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return; //Tasks To Be Performed
}

export default App;
```
After this wherever you want to use the methods or variables just import the hook like below. Now you can also sense why is there a custom hook.
>   const { updateTodo, deleteTodo, toggleComplete } = useTodo();
