import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import lodash from "lodash";

//https://hn.algolia.com/api/v1/search?query=react
// function phu thuoc vao state => function thay doi thi useEffect update
const hackerNews = () => {
  const handleFetchData = useRef({});
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=''"
  );
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // console.log("🚀 ~ handleFetchData ~ response:", response);
      setData(response.data?.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(`Error: ${error}`);
    }
  };
  //   const handleUpdateQuery = lodash.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 500);
  useEffect(() => {
    handleFetchData.current();
    // console.log(query);
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4  mb-5">
      <div className="flex mb-5 gap-x-5 flex-shrink-0">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md  transition-all focus:border-blue-400"
          defaultValue={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Typing key word"
        />
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md"
          onClick={() => {
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          }}
        >
          Featching
        </button>
      </div>

      {loading && (
        <div className="loading w-8 h-8 rounded-full  border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && error && <p className="text-red-500 my-5">{error}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data.length > 0 &&
          data.map((item) => {
            if (!item.title) return null;
            {
              /* console.log(item.title); */
            }
            return (
              <h3 key={item.id} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default hackerNews;
