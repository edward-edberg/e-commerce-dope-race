import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
const ProductList = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  // console.log(cartItems, total, amount);
  return (
    <div className="product-list">
      {cartItems.map((item) => {
        return (
          <div>
            <Product item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
