import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <>
      <div className="w-full h-20 bg-green-600 px-32 py-2 flex items-center justify-between sticky top-0">
        <Link to="">
          <h2 className="text-white font-semibold text-2xl">
            Shopping Cart App
          </h2>
        </Link>
        <div className="w-[200px] h-[65px] flex items-center justify-between">
          <FaRegHeart className="text-white text-3xl py-1" />
          <span className="relative right-[60px] top-[-20px]">0</span>
          <Link to="/cart">
            <FaCartShopping className="text-white text-3xl py-1 cursor-pointer" />
          </Link>
          <span className="relative right-[60px] top-[-20px]">
            {cartItems.reduce(
              (accumulator, next) => accumulator + next.quantity,
              0
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
