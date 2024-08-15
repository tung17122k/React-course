import React, { useState } from "react";
import useToggle from "./useToggle";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import { AccordionProvider } from "./AccordionContext";
{
  /* <div>
      <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
        {header}
      </AccordionHeader>
      <AccordionContent show={show}>{children}</AccordionContent>
    </div> */
}

const Accordion = ({ header, children }) => {
  //   const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  return (
    <AccordionProvider>
      <div className="mb-5">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
