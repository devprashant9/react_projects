import { createStore, combineReducers } from "redux";
import productReducer from "./ProductReducer";
import cartReducer, { addCartItem, CART_ADD_ITEM, CART_REMOVE_ITEM } from "./cartReducer";
import wishListReducer from "./wishListReducer";
import customCombineReducers from "./customCombineReducers";

const reducers = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

// const reducers = customCombineReducers({
//   products: productReducer,
//   cartItems: cartReducer,
//   wishList: wishListReducer,
// });

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 1, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 2, quantity: 1 },
});

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 1 },
});

store.dispatch(addCartItem(1));
store.dispatch(addCartItem(10));
store.dispatch(addCartItem(18));