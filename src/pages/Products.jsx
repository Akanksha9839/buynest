import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlistSlice";
import "./Products.css";

const products = [
  { id: 1, name: "Smart Phone", price: 12000, image: "/images/phone.jpg" },
  { id: 2, name: "Laptop", price: 55000, image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 2500, image: "/images/headphone.jpg" },
  { id: 4, name: "Bluetooth Speaker", price: 3500, image: "/images/speaker.jpg" },
  { id: 5, name: "Smart Watch", price: 4000, image: "/images/watch.jpg" },
  { id: 6, name: "Camera", price: 30000, image: "/images/camera.jpg" }
];

export default function Products() {
  const dispatch = useDispatch();

  return (
    <div className="products-page">
      <h2 className="products-title">Our Products</h2>

      <div className="products-container">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />

            <h3>{p.name}</h3>
            <p className="price">₹ {p.price}</p>

            <div className="product-actions">
              <Link to={`/products/${p.id}`} className="details-btn">
               View Details
              </Link>
              <button
                className="wishlist-btn"
                onClick={() => dispatch(addToWishlist(p))}
              >
                ❤️ Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}