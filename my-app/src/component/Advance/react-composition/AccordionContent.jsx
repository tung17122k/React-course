import React from "react";
import { useAccordion } from "./AccordionContext";

// speciallize component

const AccordionContent = ({ children }) => {
  const { show } = useAccordion();
  return (
    <>
      {show && (
        <div className="p-4 mt-2 border border-gray-300 rounded-lg content">
          {children}
        </div>
      )}
    </>
  );
};
export default AccordionContent;
