import React, { useEffect, useState } from "react";
import productContext from "./productContext";

const ProductContextProvider = ({ children }) => {
  const [productCatagory, setProductCatagory] = useState();
  const [heading, setHeading] = useState("All Products");
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState("");
  const [productList, setProductList] = useState();
  
  useEffect(() => {
    setHeading("Loading.....");
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        setProductCatagory(data);
        setHeading("All Products");
      })
      .catch((err) => {
        console.log(err);
        setHeading("Something Went Wrong , Products Not Fatched..");
      });
  }, []);

  return (
    <productContext.Provider
      value={{
        productCatagory,
        setProductCatagory,
        heading,
        setHeading,
        setCartItem,
        cartItem,
        cartCount,
        setCartCount,
        setUser,
        user,
        productList,
        setProductList,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
