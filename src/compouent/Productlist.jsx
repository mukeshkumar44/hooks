import React, { useState, useMemo } from "react";

const Productlist = () => {
  const [sortOrder, setSortOrder] = useState("ascending");

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 600 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "Keyboard", price: 80 },
  ];


  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    if (sortOrder === "ascending") {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [sortOrder, products]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2 text-lg font-medium">
          Sort by price:
        </label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <ul className="w-64 bg-white border border-gray-300 rounded-lg shadow divide-y divide-gray-200">
        {sortedProducts.map((product) => (
          <li key={product.id} className="px-4 py-2 flex justify-between">
            <span>{product.name}</span>
            <span>${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productlist;