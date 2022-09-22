import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import * as api from "../API/api";
import { useSelector } from "react-redux";

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState();
  const [countNumber, setCountNumber] = useState(0);

  const items = (category) => {
    setProducts(category.category_dishes);
    setActiveCategory(category.menu_category);
  };

  useEffect(() => {
    document.title = "Home";
    api.API.get().then((data) => {
      setCategories(data.data[0].table_menu_list);
      setProducts(data.data[0].table_menu_list[0].category_dishes);
      setActiveCategory(data.data[0].table_menu_list[0].menu_category);
    });
  }, []);
  return (
    <div className="">
      <div>
        <div className="bg-white sticky top-0 bottom-0 mb-10 ">
          <div className="m-5 pt-1">
            <Navbar />
          </div>
          <div className="flex w-auto !overflow-x-auto">
            {categories?.map((item, index) => {
              return (
                <div key={index}>
                  <Categories
                    products={items}
                    active={activeCategory}
                    categories={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="m-2">
          {products?.map((items, index) => {
            return (
              <div key={index} className="mb-5">
                <Cards number={countNumber} Product={items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
