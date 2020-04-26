import React, { createRef, useEffect } from "react";
import PropTypes from 'prop-types'

const Modal = ({ picture, closeModal }) => {
  const closeOverlay = createRef();

  const overlayCloser = (e) => {
    if (e.target !== closeOverlay.current) {
      return;
    }
    closeModal();
  };

  const closeWithEscape = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    closeOverlay.current.focus();
    window.addEventListener("keydown", closeWithEscape);
  });

  return (
    <div
      className="Overlay"
      onKeyPress={closeWithEscape}
      ref={closeOverlay}
      onClick={overlayCloser}
    >
      <div className="Modal">
        <img src={picture} alt="" />
      </div>
    </div>
  );
  Modal.propTypes = {
    picture: PropTypes.string, 
    closeModal: PropTypes.func,
  }
};

export default Modal;
