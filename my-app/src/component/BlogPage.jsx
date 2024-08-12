import React from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  //   console.log(useSearchParams());
  const [searchParams, setSeachParams] = useSearchParams();
  console.log(searchParams.get("search"));

  return <div>Blog Page</div>;
};

export default BlogPage;
