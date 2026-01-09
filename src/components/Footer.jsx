import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-box">
          <h2 className="footer-logo">BuyNest</h2>
          <p>
            BuyNest is a modern e-commerce platform providing
            quality products with a smooth shopping experience.
          </p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@buynest.com</p>
        </div>

        {/* Useful Links */}
        <div className="footer-box">
          <h3>Useful Links</h3>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-box">
          <h3>Customer Service</h3>
          <ul>
            <li>Payment Methods</li>
            <li>Return Policy</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* My Account */}
        <div className="footer-box">
          <h3>My Account</h3>
          <ul>
            <li>Login</li>
            <li>My Cart</li>
            <li>My Wishlist</li>
            <li>Order History</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 BuyNest. All Rights Reserved.</p>
        <div className="social-icons">
          <span>🌐</span>
          <span>📘</span>
          <span>📸</span>
          <span>🐦</span>
        </div>
      </div>
    </footer>
  );
}