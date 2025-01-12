# Currency Convertor Project Full Details 🤯

In this project I have used an API to get conversion rate of all currencies. However, this won't show rela-time currency change. I have used an example of **customHook** to fetch and parse data from the API call. Now, this project actually shows the resuability of a component because our **to** and **from** section remains same even when we swap them.

### Important point to be noted:
When you give **defaultValue** attribute it becomes uncontrolled and so it should not be used because UI is the game of react. Same goes for **option** tag also and no it should not have the **selected** attribute as it becomes uncontrolled.

### Multiple Props and States
You will see that the **Input Component** has quite a few props and same goes with **Convert Component**. So take your time to decode all requirements and also be focused on **value** and **onChange** attribute and methods as half of the problem will be solved there and it will gradullay help you to develop further logic and whats more need to be done

## Custom Hook
When you use built-in react hooks to make your own hook it is known as custom hook. It is important to note that **hooks are just pure javascript** functions. A hook always has **use** as it prefix before the actual function name. Like, **useCurrencyInfo**, **useGetData**, etc. It is just a javascript function.

## useId Hook in React
It is basically used to configure a link between two tags like we do with **label** and **checkboxes**, so that they work in sync.
