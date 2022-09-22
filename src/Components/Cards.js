import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { increaseValue } from "../Redux/Features/CounterSlice";

function Cards({ Product, number }) {
  const dispatch = useDispatch();
  const { total } = useSelector((state) => state.value);

  const addToCart = (type) => {
    if (type === "increase") {
      dispatch(increaseValue(1));
      if (Product?.quantity) {
        Product.quantity++;
      } else {
        Product.quantity = 1;
      }
    } else if (type === "decrease") {
      if (Product?.quantity > 0) {
        dispatch(increaseValue(-1));
      }
      if (Product.quantity) {
        if (Product.quantity > 0) {
          Product.quantity--;
        }
      }
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="w-5 h-5 border-2 grid place-content-center border-green-600 mr-2 mt-2">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
          </div>
          <div className="">
            <div className="font-serif mb-4">
              <div className="text-lg font-bold">{Product.dish_name}</div>
              <div className="text-sm font-semibold">
                {Product.dish_currency} {Product.dish_price}
              </div>
              <div className="text-gray-500 text-left">
                {Product.dish_description}
              </div>
            </div>
            {Product.dish_Availability ? (
              <div>
                <Button
                  number={number}
                  quantity={Product?.quantity}
                  addToCart={addToCart}
                />
                <div className="text-xs text-red-500 mt-2">
                  {Product.addonCat.length > 0
                    ? "Customizations available"
                    : ""}
                </div>
              </div>
            ) : (
              <div className="text-xs text-red-500 mt-2">Not available</div>
            )}
          </div>
        </div>
        <div className="grid  grid-cols-2 mr-5">
          <div className="mt-4 lg:mt-10 text-xs lg:text-sm">
            {Product.dish_calories} Calories
          </div>
          <div className="">
            <img
              src={Product.dish_image}
              className="w-[200px] lg:w-[120px] mb-10 h-[80px] m-2 rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
