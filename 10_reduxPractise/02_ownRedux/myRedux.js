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
      return function () { // used to implement unsuscribe()
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
