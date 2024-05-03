import React, { useState, useEffect, useContext } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import productContext from "../context/productContext";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {

  const {
    productCatagory,
    heading,
    setCartItem,
    cartItem,
    setCartCount,
  } = useContext(productContext);

  const addToCartHandler = (product) => {
    setCartItem([...cartItem, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className=" bg-gray-50 dark:bg-gray-900 mt-[-25px] min-h-screen">
      <Toaster
        toastOptions={{
          style: {
            background: " rgb(51 65 85)",
            color: "#fff",
          },
        }}
      />
      <br />
      <h1 className="uppercase text-center md:py-5 py-5 dark:text-white md:text-4xl text-xl font-bold">
        {heading}
      </h1>
      <div className="flex flex-wrap  justify-around">
        {productCatagory &&
          productCatagory.length > 0 &&
          productCatagory.map((product) => {
            return (
              <div key={product.id}>
                <div className=" flex flex-col md:flex-row h-[26rem] md:h-[20rem] w-44 md:w-[35rem] overflow-hidden bg-slate-200 dark:bg-gray-800 dark:text-white rounded-md shadow-lg my-6 md:p-1 md:justify-center md:align-middle">
                  <div className=" h-72 md:h-full w-auto p-1">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="  h-[90%] object-fill rounded-lg"
                    />
                  </div>
                  <div className=" mt-[-5px] md:flex md:justify-center md:h-full justify-center items-center">
                    <div className=" px-4 text-center">
                      <p className=" font-semibold line-clamp-1 hover:line-clamp-none md:line-clamp-none">
                        {product.title}
                      </p>
                      <p className="py-[1px] md:py-5 opacity-60">
                        {product.category}
                      </p>
                      <span className=" my-1 flex gap-2 text-sm items-center text-center justify-center w-full]">
                        <p className="mr-5">${Math.round(product.price)}</p>
                        <span>
                          <div className=" md:py-5 flex  items-center justify-center">
                            {product.rating.rate}
                            {"/5 "}
                            <TiStarFullOutline color={"#FDCC0D"} size={20} />
                            <p className=" text-xs opacity-50">
                              ({product.rating.count})
                            </p>
                          </div>
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          toast.success("Product Added to cart.", {
                            duration: 1000,
                          });
                          addToCartHandler(product);
                        }}
                        className="transition mb-2 px-2 ease-out delay-100 bg-[#2563eb] p-1 text-white rounded-md hover:opacity-70 "
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
