import React, { useEffect } from "react";

const header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      //   console.log("fixed");
      const header = document.getElementById("header");
      if (window.scrollY > 100) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };

    window.addEventListener("scroll", handleFixedHeader);
    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return <div className="p-5 bg-black w-full" id="header"></div>;
};

export default header;
