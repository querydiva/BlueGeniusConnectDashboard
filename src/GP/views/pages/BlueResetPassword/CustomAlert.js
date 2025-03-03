import React from 'react';

// Use default parameters for props
const CustomAlert = ({ isOpen = true, onClose, title = "Default Title", children }) => {
  if (!isOpen) return null;  // If the modal is not open, don't render it

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal container-header">
        <div className="custom-modal-header card_title1">
          {title}
          </div>
        <div className="custom-modal-body">
          {children}
        </div>
        <div className="custom-modal-footer card_footer1">
          <button className="custom-modal-close-btn login_button" onClick={onClose}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
