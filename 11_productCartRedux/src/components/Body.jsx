import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../store/cartReducer";

function Body() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products)
  // console.log(productList)
  return (
    <div className="w-full h-auto bg-slate-950 px-40 py-5 text-white">
      <div className=" flex items-center justify-start flex-wrap gap-8 p-2 mx-2 my-4">
        {productList.map((product) => (
          <div
            key={product.id}
            className="w-[250px] h-[400px] p-2 flex flex-col items-center border border-gray-800 rounded-lg"
          >
            <div className="w-full h-[70%] p-2">
              <div className="w-[100%] h-[100%]" style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "15px",
            }}></div>
            </div>
            <div className="w-full h-[30%] flex flex-col items-center justify-evenly gap-2">
              <p className="text-start text-xl">{product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}</p>
              <div className="w-full flex items-center justify-between gap-1">
                <button className="bg-sky-600 p-2 rounded-lg cursor-pointer" onClick={() => dispatch(addCartItems(product.id, 1,product.image))}>
                  Add To Cart
                </button>
                <button className="bg-sky-600 p-2 rounded-lg cursor-pointer">
                  Add To WishList
                </button>
              </div>
              <div className="w-full flex items-center justify-between">
                <p>${product.price}</p>
                <p>⭐⭐⭐⭐⭐{product.rating.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
