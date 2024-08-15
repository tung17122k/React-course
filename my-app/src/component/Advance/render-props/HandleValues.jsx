import React, { useState } from "react";

const HandleValues = () => {
  return (
    <Input
      render={(value) => <DisplayValue value={value}></DisplayValue>}
    ></Input>
  );
};

const Input = (props) => {
  const [value, setvalue] = useState(0);
  console.log(props);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        className="p-3 border border-gray-600 rounded-md w-full max-w-[500px]"
      />
      {props.render(value)}
    </>
  );
};
const DisplayValue = ({ value }) => {
  return <span className="text-3xl font-bold text-blue-300">{value}</span>;
};

export default HandleValues;
