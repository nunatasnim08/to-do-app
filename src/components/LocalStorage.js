//didn't used it
export function getLocalItems() {
    const localData = localStorage.getItem('items');
  
    if (localData) {
      return JSON.parse(localData);
    }
  
    return [];
  }
  

  export function addItemToLocalStorage(item) {
    const localData = getLocalItems();
    localStorage.setItem('items', JSON.stringify([...localData, item]));
  }