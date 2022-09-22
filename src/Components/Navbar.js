import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const {total} = useSelector((state)=>(state.value))
  return (
    <div>
      <div className="flex justify-between text-gray-500">
        <div className="text-lg font-serif font-semibold">UNI Resto Cafe</div>
        <div className="flex">
          <span className="mr-5 font-serif text-sm grid place-content-center">
            My Orders
          </span>
          <div className="text-3xl ">
            <div className="text-white w-5 h-5 text-xs ml-5 absolute bg-red-500 rounded-full"><span className="grid place-content-center pt-[2px]">{total}</span></div>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
