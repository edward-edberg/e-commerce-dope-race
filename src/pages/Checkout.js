import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  increase,
  decrease,
  removeItem,
} from "../features/cart/cartSlice";
const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  return (
    <div className="container container-checkout">
      {/* <h4>Checkout</h4> */}
      {cartItems.map((item) => {
        return (
          <div className="">
            <h3>{item.title}</h3>
            <h4>{item.amount}</h4>
            <button onClick={() => dispatch(removeItem({ id: item.id }))}>
              remove
            </button>
            <button onClick={() => dispatch(increase({ id: item.id }))}>
              increase
            </button>
            <button
              onClick={() => {
                if (item.amount === 1) {
                  dispatch(removeItem({ id: item.id }));
                  // return;
                } else {
                  dispatch(decrease({ id: item.id }));
                }
              }}
            >
              decrease
            </button>
          </div>
        );
      })}
      <button onClick={() => dispatch(clearCart())}>clear item</button>
    </div>
  );
};

export default Checkout;
