import { useEffect, useState } from "react";
import React from "react";

function withLoading(Component, url) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setNews(data.hits);
      }
      fetchData();
    }, []);
    if (!news || news.length === 0) return <div>Loading...</div>;
    return <Component data={news} {...props}></Component>;
  };
}
export default withLoading;
