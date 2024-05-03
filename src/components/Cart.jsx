import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productContext from "../context/productContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const { cartItem, setCartItem, setCartCount } = useContext(productContext);
  const [total, setTotal] = useState(0);
  

  // useNavigate is used to redirect the user to login page when click on cart when user is not logged in.
  const navigate = useNavigate();

  // Calculate total price of items
  useEffect(() => {
    let totalPrice = 0;
    if (cartItem && cartItem.length > 0) {
      cartItem.map((item) => {
        totalPrice += Math.round(item.price);
        setCartCount((prev) => prev + 1);
      });
    }

    setTotal(totalPrice);
  }, [cartItem]);
  const bacClickHandler = () => {
    history.back();
    setCartCount(0);
    setCartItem([...cartItem]);
  };

  const removeCartHandler = (id) => {
    let updatedCart = cartItem.filter((i) => {
      return i.id != id;
    });
    setCartCount(0);
    setCartItem(updatedCart);
  };

//   useEffect(()=>{
// !sessionStorage.getItem("userName") &&
//   sessionStorage.getItem("userName") != "" &&
//   navigate("/login");
//   },[]);
  

  return (
    <>
      {/* <NevBar /> */}
      <Toaster
        toastOptions={{
          style: {
            background: " rgb(51 65 85)",
            color: "#fff",
          },
        }}
      />
      <div className=" p-0 m-0 bg-gray-50 dark:bg-gray-900 min-h-screen h-100% dark:text-white">
        <div className="py-8">
          <button
            onClick={bacClickHandler}
            className=" ml-10 bg-transparent h-7 flex items-center gap-1"
          >
            <IoMdArrowRoundBack /> Back
          </button>
          <h1 className=" text-center text-4xl ">Your cart</h1>
        </div>
        <div className=" mt-8 flex flex-col items-center justify-center">
          {cartItem.length <= 0 && (
            <h1 className=" mt-64 text-4xl flex">Cart is Empty</h1>
          )}
          {cartItem &&
            cartItem.length > 0 &&
            cartItem.map((item) => {
              return (
                <div key={Math.random()}>
                  <div className=" border-b-2 w-[80vw] py-4 flex flex-col md:flex-row justify-between items-center">
                    <img
                      className=" w-36 md:w-12 mb-3 md:mb-0"
                      src={item.image}
                      alt=""
                    />
                    <div className="flex flex-col  items-center">
                      <p className=" opacity-55">Title </p>
                      <p className=" text-center mb-3 md:mb-0">{item.title} </p>
                    </div>
                    <div className="flex gap-10">
                      <div className="flex flex-col  items-center">
                        <p className=" opacity-55">Quantity </p>
                        <p>1</p>
                      </div>
                      <div className="flex flex-col  items-center">
                        <p className=" opacity-55">Price </p>
                        <p>${Math.round(item.price)}</p>
                      </div>
                      <button
                        onClick={() => {
                          removeCartHandler(item.id);
                          toast.success("Product Removed From cart.", {
                            duration: 1000
                           
                          });
                        }}
                        className=" bg-red-700 p-3 rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          {cartItem.length > 0 && (
            <>
              <div className=" flex flex-row justify-between items-center w-[80vw] my-5 text-2xl">
                <div>Total :</div>
                <div>${total} </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
