import React from "react";



function Categories({categories, products, active}) {
  return (
    <div>
      <div className="">
            <div className="">
              <div onClick={()=>products(categories)} className={`w-[300px]  cursor-pointer  relative text-center h-[30px] ${active ===categories.menu_category?  "border-b-2  border-red-500 text-red-500" : "hover:text-red-500"  } `}>
                <span className="font-serif text-lg font-semibold  ">
                  {categories.menu_category}
                </span>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Categories;
