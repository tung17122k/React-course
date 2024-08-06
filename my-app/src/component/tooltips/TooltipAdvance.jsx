import React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../fragment-portal/Portal";

const TooltipAdvance = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({});
  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
    // console.log("hover");
  };
  const handleMouseLeave = () => {
    setVisible(false);
    // console.log("leave");
  };
  return (
    <div className="relative inline-block">
      <CSSTransition in={visible} classNames="fade" timeout={300} unmountOnExit>
        {(status) => (
          <Portal overlay={false} visible={status !== "exited"}>
            <p
              className="p-3 bg-black text-white rounded-xl inline-block absolute -translate-y-full max-w-[200px] -translate-x-2/4 tooltip transition-all z-[9999]"
              style={{
                top: coords.top - coords.height / 2 + window.scrollY,
                left: coords.left + coords.width / 2,
                transition: " all 250ms",
              }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default TooltipAdvance;
