// https://designcode.io/react-hooks-handbook-uselocalstorage-hook

import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [storageValue, setStorageValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue));
  }, [storageValue, key]);

  return { storageValue, setStorageValue };
};

export default useLocalStorage;
