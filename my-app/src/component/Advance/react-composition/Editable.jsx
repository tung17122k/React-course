import React, { useState } from "react";
import useToggle from "./useToggle";

const Editable = () => {
  const { value: edit, handleToggleValue: handleToggleEdit } = useToggle();
  return (
    <div>
      {edit && (
        <input type="text" className="p-3 border border-gray-800 rounded-lg" />
      )}
      <button onClick={handleToggleEdit}>Open Edit</button>
    </div>
  );
};

export default Editable;
