import React from 'react';

// Simplified ProductCard Component
function Product({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>P{product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default function ProductList() {
  // Sample product data
  const products = [
    { id: 1, title: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Product 5', price: 59.99, image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Product 6', price: 69.99, image: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Product 7', price: 79.99, image: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Product 8', price: 89.99, image: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Product 9', price: 99.99, image: 'https://via.placeholder.com/150' },
    { id: 10, title: 'Product 10', price: 109.99, image: 'https://via.placeholder.com/150' },
  ];

  // Dummy cart array
  let cart = [];

  const handleAddToCart = (product) => {
    cart.push(product); // Add to cart (this won't re-render the component, though)
    alert(`${product.title} added to cart!`);
    console.log(cart); // You can check the cart in the console
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
            <li key={index}>{item.title} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
