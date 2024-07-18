import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

//https://picsum.photos/v2/list
const getPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};
//cach 2: ko dung useState limit, => dung concat array

const photos = () => {
  //useEffect(callback, [dependencies])
  //   useEffect(function callback() {
  //     // side-effect
  //   }, []);
  //sử dụng state để lấy ra photo
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(8);
  // su dung ref de toi uu
  // youtube Ben Awad
  const handleLoadMore = useRef({});
  handleLoadMore.current = async () => {
    // console.log("🚀 ~ getPhotos ~ setPage:", setPage);
    const images = await getPhotos(page);
    const newPhotos = [...photos, ...images];
    // console.log("🚀 ~ getPhotos ~ images:", images);
    // console.log("🚀 ~ getPhotos ~ newPhotos:", newPhotos);
    setPhotos(newPhotos);
    setPage(page + 1);
    // setLimit(limit + 8);
  };
  useEffect(() => {
    //side-effect
    // document.title = "useEffect";
    handleLoadMore.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photos.length > 0 &&
          photos.map((item) => {
            return (
              <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
                <img
                  src={item.download_url}
                  alt={item.author}
                  className="w-full h-full object-cover rounded-lg h=[200px]"
                />
              </div>
            );
          })}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore.current}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default photos;
