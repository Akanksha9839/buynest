import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductDetails.css";

const products = [
  {
    id: 1,
    name: "Smart Phone",
    price: 12000,
    image: "/images/phone.jpg",
    description:
      "High quality smart phone with excellent camera, fast performance and long battery life.",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    price: 55000,
    image: "/images/laptop.jpg",
    description:
      "Powerful laptop suitable for work, study and entertainment.",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2500,
    image: "/images/headphone.jpg",
    description:
      "Noise cancelling headphones with premium sound quality.",
    category: "Accessories",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <div className="details-container">
        {/* Image Section */}
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Info Section */}
        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="rating">⭐⭐⭐⭐☆ (120 reviews)</p>
          <p className="price">₹ {product.price}</p>

          <p className="description">{product.description}</p>

          <div className="options">
            <label>Quantity:</label>
            <input type="number" min="1" defaultValue="1" />
          </div>

          <div className="details-actions">
            <button
              className="add-cart"
              onClick={() => dispatch(addToCart(product))}
            >
              🛒 Add to Cart
            </button>

            <button className="wishlist">❤️ Add to Wishlist</button>
          </div>

          <p className="category">
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="details-tabs">
        <h3>Description</h3>
        <p>
          This product is designed with premium materials and provides the best
          user experience. Suitable for daily use with long durability.
        </p>

        <h3>Shipping & Returns</h3>
        <p>Free delivery within 5–7 working days. Easy 7-day return policy.</p>

        <h3>Reviews</h3>
        <p>⭐ ⭐ ⭐ ⭐ ☆ (120 customer reviews)</p>
      </div>
    </div>
  );
}