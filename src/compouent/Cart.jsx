import React, { useReducer } from "react";


const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};


const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedItems = [...state.items, { ...item, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + item.price,
      };

    case "REMOVE_ITEM":
      const removeItem = action.payload;
      const existingRemoveItem = state.items.find((i) => i.id === removeItem.id);

      if (!existingRemoveItem) return state;

      let newItems;
      if (existingRemoveItem.quantity > 1) {
        newItems = state.items.map((i) =>
          i.id === removeItem.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        newItems = state.items.filter((i) => i.id !== removeItem.id);
      }

      return {
        ...state,
        items: newItems,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - removeItem.price,
      };

    default:
      return state;
  }
};

const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="flex justify-between items-center mb-6">
        <p className="text-lg">Total Items: {state.totalItems}</p>
        <p className="text-lg">Total Price: ₹{state.totalPrice.toFixed(2)}</p>
      </div>

      <div className="mb-4">
        {state.items.length > 0 ? (
          <ul>
            {state.items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
              >
                <div>
                  <span className="font-medium">{item.name}</span> - ₹
                  {item.price} x {item.quantity}
                </div>
                <div>
                  <button
                    onClick={() => addItem(item)}
                    className="bg-green-500 text-white px-2 py-1 rounded mx-1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item)}
                    className="bg-red-500 text-white px-2 py-1 rounded mx-1"
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Cart is empty</p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => addItem({ id: 1, name: "Apple", price: 20 })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Apple
        </button>
        <button
          onClick={() => addItem({ id: 2, name: "Banana", price: 10 })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Banana
        </button>
      </div>
    </div>
  );
};

export default Cart;
