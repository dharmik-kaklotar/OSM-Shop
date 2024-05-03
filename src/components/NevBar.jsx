import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import productContext from "../context/productContext";
import { Link } from "react-router-dom";

const NevBar = () => {
const {
  setProductCatagory,
  setHeading,
  cartCount,
  productList,
} = useContext(productContext);

  const selectCatagoryHandler = (catagory) => {
    let finalProduct = productList.filter((cat) => cat.category == catagory);
    setProductCatagory(finalProduct);
    setHeading(catagory);
  };


  return (
    <>
      <div className=" bg-gray-50 dark:bg-gray-900">
        {/* main navbar start here */}

        <div className=" flex flex-col md:flex-row justify-center items-center  text-white md:justify-between bg-[#2563eb]">
          {/* Logo start Here */}
          <div
            className=" mx-4 my-5 text-2xl font-bold cursor-pointer"
            onClick={() => {
              setProductCatagory(productList);
              setHeading("All Products");
            }}
          >
            OSM Shop
          </div>
          {/* Logo ends here */}
          {/* {catagory starts here} */}
          <div className="flex items-center space-x-4 uppercase font-semibold">
            <div
              className=" cursor-pointer text-center"
              onClick={() => {
                selectCatagoryHandler("electronics");
              }}
            >
              ELECTRONICS
            </div>
            <div
              className=" cursor-pointer text-center"
              onClick={() => {
                selectCatagoryHandler("jewelery");
              }}
            >
              JEWELERY
            </div>
            <div
              className=" cursor-pointer text-center"
              onClick={() => {
                selectCatagoryHandler("men's clothing");
              }}
            >
              MEN'S CLOTHING
            </div>
            <div
              className=" cursor-pointer text-center"
              onClick={() => {
                selectCatagoryHandler("women's clothing");
              }}
            >
              WOMEN'S CLOTHING
            </div>
          </div>
          {/* {catagory Ends here} */}
          {/* Right Side of Navbar starts here */}
          <div className=" mx-4 my-5 flex cursor-pointer">
            {/* user Section */}
            {/* <div className="flex items-center mr-5">
              <span className=" mr-2">
                <FaUser size={20} />
              </span>
            </div> */}
            {/* Cart section */}
            <Link to="/cart">
              <div className="flex items-center ">
                <span className="mr-2">
                  <FaShoppingCart size={20} />
                </span>
                <span className=" text-sm ml-[-12px] relative bottom-2 bg-slate-700 rounded-[50%] px-1.5">
                  {cartCount}
                </span>{" "}
               Your Cart
              </div>
            </Link>
          </div>
          {/* Right Side of Navbar ends here */}
        </div>
      </div>
    </>
  );
};

export default NevBar;
