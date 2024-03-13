import { useState, useEffect } from "react";

export default function useLocalStorage(itemName, initialValue = null) {
  const [items, setItems] = useState(initialValue);

  useEffect(() => {
    const ItemsLocalStorage = localStorage.getItem(itemName);
    let parseItems;
    if (!ItemsLocalStorage) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parseItems = initialValue;
    } else {
      parseItems = JSON.parse(ItemsLocalStorage);
      setItems(parseItems);
    }
  }, [itemName, initialValue]);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };
  const getItem = () => JSON.parse(localStorage.getItem(itemName));
  const removeItem = () => localStorage.removeItem(itemName);

  return { items, saveItems, removeItem, getItem };
}
