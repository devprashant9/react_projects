// Action Methods
const ADD_ITEM_CART = "add/item/cart";
const REMOVE_ITEM_CART = "remove/item/cart";
const INCREASE_QUANTITY_CART = "increase/quantity/cart";
const DECREASE_QUANTITY_CART = "decrease/quantity/cart";

// Action Creators
export function addCartItems(productId, quantity = 1, image) {
  return { type: ADD_ITEM_CART, payload: { productId, quantity, image} };
}

export function removeCartItems(productId) {
  return { type: REMOVE_ITEM_CART, payload: { productId } };
}

export function increaseQuantityCart(productId, quantity = 1) {
  return { type: INCREASE_QUANTITY_CART, payload: { productId, quantity } };
}

export function decreaseQuantityCart(productId, quantity = 1) {
  return { type: DECREASE_QUANTITY_CART, payload: { productId, quantity } };
}

// cart reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM_CART: {
      const itemExist = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (itemExist) {
        return state.map((cartItem) =>
          cartItem.productId === itemExist.productId
            ? { ...cartItem, quantity: cartItem.quantity + action.payload.quantity }
            : cartItem
        );
      }
      return [...state, action.payload];
    }

    case REMOVE_ITEM_CART:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );

    case INCREASE_QUANTITY_CART:
      return state.map((cartItem) =>
        cartItem.productId === action.payload.productId
          ? { ...cartItem, quantity: cartItem.quantity + action.payload.quantity }
          : cartItem
      );

    case DECREASE_QUANTITY_CART:
      return state
        .map((cartItem) =>
          cartItem.productId === action.payload.productId
            ? { ...cartItem, quantity: cartItem.quantity - action.payload.quantity }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}


