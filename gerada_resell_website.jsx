import React from "react";
import { motion } from "framer-motion";

export default function GeradaWebsite() {
  const products = [
    { id: 1, name: "DualSense Controller - Midnight Black", price: "€69.99" },
    { id: 2, name: "Wireless Headphones", price: "€49.99" },
    { id: 3, name: "Gaming Mouse RGB", price: "€29.99" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-black text-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerada Finds</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Trending Products. Best Prices.
        </motion.h2>
        <p className="text-lg mb-6">Handpicked deals delivered to you.</p>
        <a href="#shop" className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800">
          Shop Now
        </a>
      </section>

      {/* Products */}
      <section id="shop" className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow p-4">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
            <button className="mt-3 bg-black text-white px-4 py-2 rounded-xl">
              Buy Now
            </button>
          </div>
        ))}
      </section>

      {/* About */}
      <section id="about" className="bg-white p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About Gerada Finds</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          Gerada Finds is your go-to store for trending and affordable products. We source the best deals so you don’t have to.
        </p>
      </section>

      {/* Pinterest Section */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Follow Us on Pinterest</h2>
        <p className="text-gray-600 mb-4">Discover daily deals and trending finds.</p>
        <a
          href="https://pinterest.com"
          target="_blank"
          className="bg-red-500 text-white px-6 py-3 rounded-2xl"
        >
          View Pins
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600">Email: geradafinds@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-6 mt-10">
        <p>© {new Date().getFullYear()} Gerada Finds. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* NEXT STEPS TO MAKE IT LIVE:
1. Deploy on Vercel (free)
2. Add Stripe for payments
3. Replace placeholder products with real items
4. Connect your Pinterest link
5. Add product images
*/
