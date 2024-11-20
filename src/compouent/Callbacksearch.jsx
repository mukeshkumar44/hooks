import React,{useState, useCallback , useEffect} from 'react'
const products = [
    "mukesh verma",
    "Apple iPhone",
    "Samsung Galaxy",
    "Google ",
    "OnePlus ",
    "Xiaomi Redmi",
    "Sony Xperia",
    "Nokia Lumia",
    "Motorola Moto",
    "Huawei ",
    "Oppo Reno",
  ];
const Callbacksearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const debounce = useCallback((callback, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }, []);

  const handleSearch = useCallback(() => {
    const filtered = products.filter((product) =>
      product.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const debouncedSearch = useCallback(debounce(handleSearch, 300), [handleSearch]);

  useEffect(() => {
    debouncedSearch();
  }, [searchQuery, debouncedSearch]);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Product Search</h1>
      
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 w-80 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <ul className="w-80 border-t pt-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <li
              key={index}
              className="py-2 px-4 border-b last:border-none hover:bg-gray-100"
            >
              {product}
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">No products found</p>
        )}
      </ul>
    </div>
  )
}

export default Callbacksearch
