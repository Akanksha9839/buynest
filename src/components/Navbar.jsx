import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="navbar">
      <h2 className="logo">BuyNest</h2>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          Cart {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}