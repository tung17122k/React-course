import React, { useEffect, useRef, useState } from "react";
import useHover from "../../Hooks/useHover";
import UseClickOutSide from "../../Hooks/UseClickOutSide";

const Dropdown = () => {
  const { hover, nodeRef } = useHover();
  const { show, setShow, domRef, select } = UseClickOutSide();
  let dropdownList = [
    {
      id: 1,
      title: "Javascrip",
    },
    {
      id: 2,
      title: "ReactJS",
    },
    {
      id: 3,
      title: "VueJS",
    },
  ];

  return (
    <div className={`p-5`}>
      <div className="relative w-full max-w-[400px]" ref={domRef}>
        <div
          className="p-5 border border-gray-400 rounded-lg w-full cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {select}
        </div>
        {show && (
          <div className="border border-gray-400 rounded-lg top-full left-0 w-full bg-white absolute hiden">
            {dropdownList.map((item) => (
              <div className={`p-5 cursor-pointer`} key={item.id}>
                {item.title}
              </div>
            ))}

            {/* <div className="p-5 cursor-pointer">ReactJS</div>
            <div className="p-5 cursor-pointer">VueJS</div> */}
          </div>
        )}
      </div>
      <p className={`${hover ? "text-green-400" : ""}`} ref={nodeRef}>
        aaaaaaaaaaaaaaaaa
      </p>
    </div>
  );
};

export default Dropdown;
