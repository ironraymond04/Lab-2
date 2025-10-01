import React, { useState } from 'react';
import laptop from './assets/laptop.jfif';
import system from './assets/System Unit.jfif';
import HDD from './assets/HDD.jfif';
import SSD from './assets/SSD.jfif';
import Motherboard from './assets/motherboard.jfif';
import Keyboard from './assets/keyboard.jfif';
import Mouse from './assets/mouse.jfif';
import Headphones from './assets/headphones.jfif';
import Monitor from './assets/monitor.jfif';
import AVR from './assets/avr.jfif';

function Product({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image"git init
      />
      <h3>{product.title}</h3>
      <p>P{product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default function ProductList() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, title: 'Laptop', price: 19.99, image: laptop },
    { id: 2, title: 'System Unit', price: 29.99, image: system },
    { id: 3, title: 'HDD', price: 39.99, image: HDD },
    { id: 4, title: 'SSD', price: 49.99, image: SSD },
    { id: 5, title: 'Motherboard', price: 59.99, image: Motherboard },
    { id: 6, title: 'Keyboard', price: 69.99, image: Keyboard },
    { id: 7, title: 'Mouse', price: 79.99, image: Mouse },
    { id: 8, title: 'Headphones', price: 89.99, image: Headphones },
    { id: 9, title: 'Monitor', price: 99.99, image: Monitor },
    { id: 10, title: 'AVR', price: 109.99, image: AVR },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <section>
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.title} - P{item.price.toFixed(2)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
