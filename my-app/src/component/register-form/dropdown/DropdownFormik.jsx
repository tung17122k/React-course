import React from "react";
import { useEffect, useState } from "react";
import UseClickOutSide from "../../../../src/component/register-form/hook/useClickOutSide.jsx";
import { useField } from "formik";
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
const DropdownFormik = ({
  dropdownLabel = "Select your job",
  name,
  setValue,
}) => {
  const [field, meta] = useField({ name });
  //   const dropdownValue = { name: "job", defaultValue: "" };
  const [label, setLabel] = useState(dropdownLabel);
  const { show, setShow, nodeRef } = UseClickOutSide();
  useEffect(() => {
    if (field.value === "") setLabel(dropdownLabel);
  }, [field.value]);
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };

  return (
    <div className="flex flex-col gap-3 mt-5 ">
      <label htmlFor="">Job</label>
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
        </div>
      </div>
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-sm">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default DropdownFormik;
