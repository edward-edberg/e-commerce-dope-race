// import logo from './logo.svg';
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "./features/cart/cartSlice";
import Checkout from "./pages/Checkout";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(isLoading, cartItems);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
