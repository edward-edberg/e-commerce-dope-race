import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  console.log(cartItems, total, amount);
  return (
    <div className="product-item">
      <h3>{item.title}</h3>
      <img src={item.img} alt={item.title} className="product-img" />
      <h4>{item.price}</h4>
      <button
        onClick={() => {
          dispatch(
            addToCart({
              id: item.id,
              title: item.title,
              price: item.price,
              img: item.img,
            })
          );
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
