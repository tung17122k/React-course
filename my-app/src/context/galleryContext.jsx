import { createContext, useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const GalleryContext = createContext();
const fakeData = [
  {
    id: 1,
    url: "https://plus.unsplash.com/premium_photo-1680020185326-45491267f8da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 2,
    url: "https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 3,
    url: "https://plus.unsplash.com/premium_photo-1664882424754-ee3aeaa915cf?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1616540389399-3033c4ba7072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1712847333437-f9386beb83e4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
];

function GalleryProvider(props) {
  const { storageValue, setStorageValue } = useLocalStorage("photos", fakeData);
  const { storageValue: storageCart, setStorageValue: setStorageCart } =
    useLocalStorage("cardItems", []);

  // console.log(storageValue);
  const [photos, setPhotos] = useState(storageValue);
  const [cardItems, setCardItems] = useState(storageCart);
  const [favoriteList, setFavoriteList] = useState([]);
  const value = {
    photos,
    cardItems,
    favoriteList,
    setPhotos,
    setCardItems,
    setFavoriteList,
    toggleLike,
    addToCard,
    removeFromCart,
  };
  function toggleLike(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isLike: !photo.isLike };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setStorageValue(updatedArray);
  }

  // 1 viet function addToCard param la photo
  // 2 Cap nhat lai state gio hang (cardItem)

  function addToCard(newItem) {
    setCardItems((prevItem) => {
      // kiem tra xem item do da ton tai chua
      const isExisted = prevItem.some((item) => item.id === newItem.id);
      // console.log(isExisted);
      // ton tai roi thi tra ve danh sach truoc do
      if (isExisted) {
        setStorageCart([...prevItem]);
        return [...prevItem];
      }
      // neu chua ton tai thi them no vao gio hang
      setStorageCart([...prevItem, newItem]);
      return [...prevItem, newItem];
    });
  }
  function removeFromCart(photoId) {
    setCardItems((prevItem) => {
      const results = prevItem.filter((item) => item.id !== photoId);
      console.log(results);
      setStorageCart(results);
      return results;
    });
  }
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export { GalleryProvider, useGallery };
