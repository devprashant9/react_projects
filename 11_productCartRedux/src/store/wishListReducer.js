// Action Methods
const ADD_ITEM_WISHLIST = "add/items/wishlist";
const REMOVE_ITEM_WISHLIST = "remove/items/wishlist";

// ACtion Creators
export function addItemsWishList(productId) {
  return { type: ADD_ITEM_WISHLIST, payload: { productId } };
}

export function removeItemWishList(productId) {
  return { type: REMOVE_ITEM_WISHLIST, payload: { productId } };
}

// wishlist reducer

export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM_WISHLIST:
      return [...state, action.payload];

    case REMOVE_ITEM_WISHLIST:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );
      default:
        return state;
  }
}
