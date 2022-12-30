import React from 'react'
const FormList = ({ itemlist, deleteItemFromList }) => {
  const deleteItem = (key) => {
    deleteItemFromList(key);
  };

  return (
    <div className="FormList">
      {itemlist.map((item) => (
        <div key={item.key} className="item">
          <p>{item.item}</p>
          <button onClick={() => deleteItem(item.key)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default FormList;