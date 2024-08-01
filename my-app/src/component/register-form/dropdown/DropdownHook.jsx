import React, { useState, useEffect } from "react";
import { useWatch } from "react-hook-form";
import UseClickOutSide from "../../../../src/component/register-form/hook/useClickOutSide.jsx";

const data = [
  {
    id: 1,
    value: "FE",
    text: "Front-end developer",
  },
  {
    id: 2,
    value: "BE",
    text: "Back-end developer",
  },
  {
    id: 3,
    value: "PM",
    text: "Project manager",
  },
];

// sử dụng useWatch để cho nó 1 register có name = job , sử dụng setvalue, useWatch và custom attribute: useWatch => name: 'Job', setValue(name, data - custom- attribute) => register => job: 'data - custom- attribute'
const DropdownHook = ({
  control,
  setValue,
  name,
  dropdownLabel = "Select your job",
  ...props
}) => {
  const { show, setShow, nodeRef } = UseClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValue: "", // default value before the render
  });
  // console.log(dropdownValue); '' => value
  const [label, setLabel] = useState(dropdownLabel);
  useEffect(() => {
    if (dropdownValue === "") setLabel(dropdownLabel);
  }, [dropdownValue]);
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };
  // console.log(jobValue);
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-500 bg-white flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${show ? "" : "opacity-0 invisible"}`}
      >
        {data.map((item) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
        {/* <div>
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value="FE"
          >
            FE
          </div>
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value="BE"
          >
            BE
          </div>
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value="PM"
          >
            PM
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DropdownHook;
