export const CART_ADD_ITEM = "cart/addItems";
export const CART_REMOVE_ITEM = "cart/removeItems";
export const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
export const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

// Action Creators
export function addCartItem(productId){
  return({
    type: CART_ADD_ITEM,
    payload: { productId: productId, quantity: 1 },
  })
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, action.payload];

    case CART_REMOVE_ITEM:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );

    case CART_INCREASE_QUANTITY:
      return state.map((cartItem) =>
        cartItem.productId === action.payload.productId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

    case CART_DECREASE_QUANTITY:
      return state
        .map((cartItem) =>
          cartItem.productId === action.payload.productId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
