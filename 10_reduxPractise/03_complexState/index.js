import { productsList } from "./productList";
import { createStore } from "redux";

const initialState = {
  products: productsList,
  cartItems: [],
  wishlist: [],
};

const CART_ADD_ITEM = "cart/addItems";
const CART_REMOVE_ITEM = "cart/removeItems";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

const WISHLIST_ADD_ITEM = "cart/addWishList";
const WISHLIST_REMOVE_ITEM = "cart/removeWishList";

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };

    case CART_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.productId === action.payload.productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };

    case CART_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) =>
            cartItem.productId === action.payload.productId
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0),
      };

    case WISHLIST_ADD_ITEM:
      return { ...state, wishlist: [...state.wishlist, action.payload] };

    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (wishListItem) => wishListItem.productId !== action.payload.productId
        ),
      };

    default:
      return state;
  }
}

const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log("Initial State:", store.getState());

store.subscribe(() => console.log("From Subscribe:", store.getState()));

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 1, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 11, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 15, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 6, quantity: 1 },
});

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 11 },
});

store.dispatch({
  type: CART_INCREASE_QUANTITY,
  payload: { productId: 15 },
});

store.dispatch({
  type: CART_INCREASE_QUANTITY,
  payload: { productId: 15 },
});

store.dispatch({
  type: CART_INCREASE_QUANTITY,
  payload: { productId: 15 },
});

store.dispatch({
  type: CART_DECREASE_QUANTITY,
  payload: { productId: 15 },
});

store.dispatch({
  type: CART_DECREASE_QUANTITY,
  payload: { productId: 1 },
});

store.dispatch({
  type: CART_DECREASE_QUANTITY,
  payload: { productId: 1 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 1 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 9 },
});

store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 1 },
});
