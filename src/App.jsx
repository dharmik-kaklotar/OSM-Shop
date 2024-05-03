import "./App.css";
import NevBar from "./components/NevBar";
import Products from "./components/Products";
import ProductContextProvider from "./context/ProductContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NevBar />, <Products />
        </>
      ),
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return (
    <ProductContextProvider>
      {/* <NevBar /> */}
      {/* <ImageSlider /> */}
      {/* <Products /> */}
      {/* <Registeration /> */}
      {/* <Login /> */}
      <RouterProvider router={router}>
        {/* <NevBar /> */}
        {/* Additional components go here */}
      </RouterProvider>
    </ProductContextProvider>
  );
}

export default App;
