import React from "react";
import { useSelector } from "react-redux";

function Button({addToCart, number, quantity}) {
   
   
  return (
    <div>
      <div className="w-[120px] h-9 bg-green-600 rounded-xl ">
        <div className=" justify-between relative text-white">
            <div className="pt-1">
          <button className="pl-3 bottom-[.1px] left-0 absolute text-2xl font-semibold " onClick={()=>{addToCart("decrease")}} >-</button>
          <span className="font-semibold pl-[55px] text-xl font-serif">{quantity? quantity : "0"}</span>
          <button className="pr-3 right-0 bottom-[2px] absolute text-xl font-semibold" onClick={()=>{addToCart("increase")}}  >+</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
