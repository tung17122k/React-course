import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogPageDetails = () => {
  console.log(useParams());
  const { slug } = useParams();
  console.log(slug);
  // console.log(useNavigate());
  const navigate = useNavigate();

  return (
    <div>
      Blog detail page
      <button
        className="p-3 text-white bg-blue-500 rounded-lg"
        onClick={() => navigate("/blog")}
      >
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
