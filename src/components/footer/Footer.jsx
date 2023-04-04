import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <h3>Categories</h3>

        <li>Smart Phones</li>
        <li>Laptops</li>
        <li>Perfumes</li>
        <li>Skin Care</li>
        <li>Groceries</li>
        <li>Home Decoration </li>
      </div>
      <div className="footer-item">
        <h3>Help</h3>

        <li>Track Order</li>
        <li>Returns</li>
        <li>Shipping</li>
        <li>FAQs</li>
      </div>
      <div className="footer-item">
        <h3>Get In Touch</h3>
        <li>
          Any questions? Let us know in store at 8th <br /> floor, 379 Hudson
          St, New York, NY 10018 or <br /> call us on (+1) 96 716 6879
        </li>
      </div>
      <div className="footer-item">
        <h3>Newsletter</h3>

        <form>
          <input
            type="email"
            className="footer-input"
            placeholder="email@example.com"
          />
        </form>
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
}
