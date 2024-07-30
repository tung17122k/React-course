import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import UseClickOutSide from "../../../../src/component/register-form/hook/useClickOutSide.jsx";

// sử dụng useWatch để cho nó 1 register có name = job , sử dụng setvalue và custom attribute để setValue("userName", "Tung") => setValue("job", "FE || BE || PM")
const DropdownHook = ({ control, setValue, name, ...props }) => {
  const { show, setShow, nodeRef } = UseClickOutSide();
  useWatch({
    control,
    name: "job",
    defaultValue: "", // default value before the render
  });
  const [label, setLabel] = useState("Select your job");
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.dataset.value);
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
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;
