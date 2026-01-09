import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";
import "./Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>₹ {item.price}</p>

          <div className="qty-controls">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹ {totalPrice}</h3>
    </div>
  );
}