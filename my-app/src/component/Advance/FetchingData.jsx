import React from "react";
import withLoading from "./WithLoading";

const FetchingData = ({ data }) => {
  return (
    <div>
      {/* {data.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </div>
  );
};

export default withLoading(
  FetchingData,
  "https://hn.algolia.com/api/v1/search?query=react"
);
