import React from "react";
import Portal from "./Portal";
import { CSSTransition } from "react-transition-group";

// lấy từ Portal thêm các class làm animation khi mở modal + class children

const ModalBase = ({ visible, onClose, children, bodyClassName }) => {
  return (
    <>
      <CSSTransition
        in={visible}
        timeout={500}
        unmountOnExit
        classNames={"zoom"}
      >
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClass="fixed z-[9999] inset-0 flex items-center justify-center"
            bodyStyle={{ transition: "all 250ms" }}
            bodyClassName={`relative z-10 content ${bodyClassName}`}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
