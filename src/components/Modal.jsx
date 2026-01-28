import ContactForm from "./ContactForm";
import "./Modal.css";

function Modal({ modalTitle, modalPara, modalClose, contactModal }) {
  return (
    <div className="modal">
      <div className="module__container">
        <div className="module__row">
          <div className="modal__header">
            <h3 className="modal__title">{modalTitle}</h3>
            <button className="modal__icon--wrapper" onClick={modalClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p className="modal__para">{modalPara}</p>
          { 
          contactModal && <ContactForm />
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
