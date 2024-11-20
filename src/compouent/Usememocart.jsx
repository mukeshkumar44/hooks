import React, { useState, useMemo } from "react";

let arr = [
  { id: "1", product: "Product 1", price: 10, Quantity: 0 },
  { id: "2", product: "Product 2", price: 20, Quantity: 0 },
  { id: "3", product: "Product 3", price: 30, Quantity: 0 },
  { id: "4", product: "Product 4", price: 40, Quantity: 0 },
  { id: "5", product: "Product 5", price: 50, Quantity: 0 },
  { id: "6", product: "Product 6", price: 60, Quantity: 0 },
  { id: "7", product: "Product 7", price: 80, Quantity: 0 },
  { id: "8", product: "Product 8", price: 70, Quantity: 0 },
  { id: "9", product: "Product 9", price: 90, Quantity: 0 },
  { id: "10", product: "Product 10", price: 180, Quantity: 0 },
];

const Usememocart = () => {
  const [cartItems, setCartItems] = useState(arr);

  const handleAddToCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, Quantity: item.Quantity + 1 }
          : item
      )
    );
  };

  const totalValue = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.Quantity, 0);
  }, [cartItems]);

  return (
    <div className="max-w-lg  mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-4">Total Value: ${totalValue}</h1>
      <div className="grid grid-cols-2 gap-4">
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-green-600 bg-yellow-300 p-4 rounded-xl text-center "
            >
              <h2 className="text-lg font-semibold">{item.product}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.Quantity}</p>
              <button
                onClick={() => handleAddToCart(item.id)}
                className="bg-orange-500 text-white rounded-xl w-full py-2 mt-3"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Usememocart;
