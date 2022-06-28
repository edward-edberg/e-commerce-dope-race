import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/ProductList";
const Store = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  // console.log(cartItems, total, amount);
  return (
    <main className="container-store">
      {/* <h1>Store Page</h1> */}
      <ProductList />
    </main>
  );
};

export default Store;
