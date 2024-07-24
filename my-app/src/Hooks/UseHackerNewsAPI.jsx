import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function useHackerNewsAPI(ititialURL, initialData) {
  const handleFetchData = useRef({});
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [url, setUrl] = useState(ititialURL);
  //"https://hn.algolia.com/api/v1/search?query=''"
  // xu ly unmounted neu co them settimeout vao fetch data
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      // unmounted
      isMounted.current = false;
    };
  }, []);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);

      //   console.log("🚀 ~ handleFetchData ~ response:", response);
      //   console.log(isMounted.current);

      if (isMounted.current) {
        setData(response.data?.hits);
        // console.log(data);
        setLoading(false);
      }
    } catch (error) {
      //   console.log(error);
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
  return { setUrl, loading, error, data };
}
