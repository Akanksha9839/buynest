import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductDetails.css";

const products = [
  { id: 1, name: "Smart Phone", price: 12000, image: "/images/phone.jpg" },
  { id: 2, name: "Laptop", price: 55000, image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 2500, image: "/images/headphone.jpg" },
  { id: 4, name: "Bluetooth Speaker", price: 3500, image: "/images/speaker.jpg" },
  { id: 5, name: "Smart Watch", price: 4000, image: "/images/watch.jpg" },
  { id: 6, name: "Camera", price: 30000, image: "/images/camera.jpg" },
];

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />

      <div className="details-info">
        <h1>{product.name}</h1>
        <p className="price">₹ {product.price}</p>

        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;