import React from "react";
import { useAccordion } from "./AccordionContext";

const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();
  return (
    <div
      className="flex items-center justify-between p-4 border border-gray-400 rounded-lg cursor-pointer"
      onClick={handleToggleShow}
    >
      <span>{children}</span>
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
