import React, { useState, useCallback } from "react";

const products = [
  { id: 1, name: "Apple iPhone", price: 999 },
  { id: 2, name: "Samsung Galaxy", price: 899 },
  { id: 3, name: "Google Pixel", price: 799 },
  { id: 4, name: "OnePlus Nord", price: 499 },
];

const Callbackcart = () => {
  const [cart, setCart] = useState([]);

  // Memoized function to add item to cart
  const addItem = useCallback(
    (product) => {
      setCart((prevCart) => {
        const itemInCart = prevCart.find((item) => item.id === product.id);
        if (itemInCart) {
          // If item is already in the cart, update quantity
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // If item is not in the cart, add new item with quantity 1
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    },
    [setCart]
  );

  // Memoized function to remove item from cart
  const removeItem = useCallback(
    (productId) => {
      setCart((prevCart) => {
        return prevCart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
      });
    },
    [setCart]
  );

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">E-commerce Cart</h1>
      
      {/* Product List */}
      <div className="w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Products</h2>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center p-2 mb-2 border rounded-md shadow-sm"
          >
            <span>{product.name}</span>
            <span>${product.price}</span>
            <button
              onClick={() => addItem(product)}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 mb-2 border rounded-md shadow-sm"
              >
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Cart is empty</p>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-bold">
            Total Price: <span className="text-green-600">${totalPrice}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Callbackcart;
