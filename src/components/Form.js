

import React, { useState, useEffect } from 'react';
import FormList from './FormList';
/* import {getLocalItems,addItemToLocalStorage} from './LocalStorage'; */

function Form() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    const newItem = { item: currentItem, key: Date.now() };
    updateItemList([...itemList, newItem]);
    setCurrentItem('');
    localStorage.setItem('items', JSON.stringify([...itemList, newItem]));
  };

  const deleteItemFromList = (key) => {
    const updatedItemList = itemList.filter((item) => item.key !== key);
    updateItemList(updatedItemList);
    localStorage.setItem('items', JSON.stringify(updatedItemList));
  };

  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    const parsedItems = JSON.parse(savedItems);
    updateItemList(parsedItems || []);
  }, []);

  return (
    <div className="Wrapper">
      <h1>Hello</h1>
      <div className="Input-wrapper">
        <input
          type="text"
          placeholder="What're you upto? "
          value={currentItem}
          onChange={onChangeHandler}
        />
        <div className="Button-wrapper">
          <button className="todo-button" onClick={addItemToList}>
            +
          </button>
        </div>
      </div>
      <FormList itemlist={itemList} deleteItemFromList={deleteItemFromList} />
    </div>
  );
}


export default Form;