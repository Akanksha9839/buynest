import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import "./Wishlist.css";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (wishlist.length === 0) {
    return <h2 className="empty">Your Wishlist is Empty ❤️</h2>;
  }

  return (
    <div className="wishlist-container">
      {wishlist.map((item) => (
        <div className="wishlist-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>

          <button
            className="cart-btn"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </button>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeFromWishlist(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}