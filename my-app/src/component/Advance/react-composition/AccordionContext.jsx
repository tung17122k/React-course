import { createContext, useContext } from "react";
import useToggle from "./useToggle";

const AccordionContext = createContext();

function AccordionProvider(props) {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  const values = { show, handleToggleShow };
  return (
    <AccordionContext.Provider
      value={values}
      {...props}
    ></AccordionContext.Provider>
  );
}
function useAccordion() {
  const context = useContext(AccordionContext);
  if (typeof context === "undefined")
    throw new Error("useAccordion must be used within AccordionProvider");
  //   console.log(context);
  return context;
}
export { useAccordion, AccordionProvider };
