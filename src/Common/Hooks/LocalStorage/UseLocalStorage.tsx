import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
  // getting stored value

  const saved = JSON.parse(localStorage.getItem(key) || "{}");
  return saved || defaultValue;
}

export const UseLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
