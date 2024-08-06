import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

// làm ra 1 cái khung wrapper , trong wrapper có inset black + modal trắng , trong modal trắng có children

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const portalWrapperElement = createPortalWrapper();
const Portal = ({
  containerClass = "",
  bodyClassName = "",
  onClose = () => {},
  overlay = true,
  containerStyle = {},
  bodyStyle = {},
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElement);
  }, []);
  const renderContent = (
    <div className={containerClass} style={containerStyle}>
      {overlay && (
        <div
          className="absolute inset-0 bg-black overlay bg-opacity-20"
          onClick={onClose}
        ></div>
      )}

      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElement);
};
Portal.propTypes = {
  containerClass: PropTypes.string,
  bodyClassName: PropTypes.string,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  children: PropTypes.node,
  overlay: PropTypes.bool,
};

export default Portal;
