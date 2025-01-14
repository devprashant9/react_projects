# Toggle Theme Project Using Context API Full Details 🤯

The main functionality of this project is with the help of only one switch user can switch between dark and light theme of a website. You may have observed that websites have only a single switch that is used to switch from light to dark theme or vice versa.

In this project you will notice that styles are already written from light and dark mode with the help of tailwind css. You just need to toogle a switch to activate the specified theme but on toggle button you want that every component should be aware about the current theme functionality thus it is implemented using **Context API**.

In this project **Context API** is used in a production way approach. Take a look at the below code.

```javascript
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
```

Now, in this code we are creating a context which have a object with few properties and methods. However, the methods are not defined here. Now take a look at **App.jsx** below.

Note, that variable name and function name are similar which we have provided while creating the context and then wrapping it with provider.

After this also take a look at **ThemeBtn.jsx** component.

```javascript
import { useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
```
