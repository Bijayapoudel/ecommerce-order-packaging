import React from 'react';
import '../index.css';   //yo ni ho

const ItemList = ({ items, handleCheckboxChange }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input 
              type="checkbox" 
              value={item.id} 
              onChange={handleCheckboxChange} 
            />
            {item.name} - ${item.price} - {item.weight}g
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
