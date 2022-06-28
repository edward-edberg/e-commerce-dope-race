import { useDispatch, useSelector } from "react-redux";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  console.log(cartItems, total, amount);
  return (
    <div className="product-item">
      <h3>{item.title}</h3>
      <img src={item.img} alt={item.title} className="product-img" />
      <h4>{item.price}</h4>
    </div>
  );
};

export default Product;
