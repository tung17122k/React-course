import React, { useEffect, useRef, useState } from "react";

export default function UseClickOutSide() {
  const [show, setShow] = useState(false);
  const domRef = useRef(null);
  const [select, setSelect] = useState("Select");
  useEffect(() => {
    function handleClickDropdown(e) {
      if (domRef.current && !domRef.current.contains(e.target)) {
        // console.log("outside");
        setShow(false);
      } else {
        console.log(e.target.textContent);
        setSelect(e.target.textContent);
      }
    }
    document.addEventListener("click", handleClickDropdown);
    return () => {
      document.removeEventListener("click", handleClickDropdown);
    };
  }, [select]);
  return {
    show,
    setShow,
    domRef,
    select,
  };
}
