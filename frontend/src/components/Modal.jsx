import "./Modal.scss";

import { createPortal } from "react-dom";

const Modal = ({ isShowing, hide, title, children }) => {
  return isShowing
    ? createPortal(
        <section className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h4>{title}</h4>
              {hide && (
                <button type="button" onClick={hide}>
                  close ╳
                </button>
              )}
            </div>
            <div className="modla-body">{children}</div>
          </div>
        </section>,
        document.body
      )
    : null;
};

export default Modal;
