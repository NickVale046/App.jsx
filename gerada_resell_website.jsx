import React from "react";

export default function App() {
  const products = [
    { id: 1, name: "DualSense Controller - Midnight Black", price: "€69.99" },
    { id: 2, name: "Wireless Headphones", price: "€49.99" },
    { id: 3, name: "Gaming Mouse RGB", price: "€29.99" }
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Gerada Finds</h1>
      <p>Trending Products. Best Prices.</p>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
