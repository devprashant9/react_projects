import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantityCart, increaseQuantityCart } from "../store/cartReducer";


function Cart() {

  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <div className="w-full h-screen bg-slate-800">
      <div className="w-[70%] h-[100px] mx-[15%]">
        <p className="text-3xl text-center text-white text-semibold py-8">
          Your Cart Summary
        </p>
        <div className="flex items-center justify-around text-lg text-white text-semibold">
          <p>Product</p>
          <p>Quantity</p>
          <p>Remove</p>
          <p>Total</p>
        </div>
        {
          cartItems.map((cartItem, index) => (
            <div key={index} className=" w-full h-[100px] bg-gray-700 flex items-center justify-around text-lg text-white text-semibold mt-4">
          <div className="image w-[200px] h-[100px] bg-sky-600">
            <img
              className="w-[100%] h-[100%]"
              src={cartItem.image}
              alt=""
            />
          </div>
          <div className="quantity w-[200px] h-[100px] flex items-center justify-between">
            <button className="w-[75px] h-[45px] bg-gray-800 text-2xl rounded-lg" onClick={() => dispatch(increaseQuantityCart(cartItem.productId, 1))}>
              +
            </button>
            <p>{cartItem.quantity}</p>
            <button className="w-[75px] h-[45px] bg-gray-800 text-2xl rounded-lg" onClick={() => dispatch(decreaseQuantityCart(cartItem.productId, 1))}>
              -
            </button>
          </div>
          <div className="remove w-[200px] h-[100px] flex items-center justify-center">
            <button className="w-[100px] h-[55px] bg-gray-800 text-xl rounded-lg">
              Remove
            </button>
          </div>
          <div className="total w-[200px] h-[100px] flex items-center justify-center">
            <p>$400</p>
          </div>
        </div>
          ))
        }
        <p className="w-[300px] h-[55px] bg-red-400 text-xl rounded-lg m-4 text-center py-3 text-white">
          Total Cart Value: $100
        </p>
      </div>
    </div>
  );
}

export default Cart;
