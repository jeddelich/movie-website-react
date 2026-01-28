import ContactForm from "./ContactForm";
import "./Modal.css";

function Modal({
  modalTitle,
  modalPara,
  modalClose,
  contactModal,
  aboutModal,
}) {
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
          {contactModal && <ContactForm />}
          {aboutModal && (
            <div className="about__modal--footer">
              <figure className="about__icon--wrapper">
                <i className="fa-solid fa-arrow-left-long"></i>
              </figure>
              <h4>Start Your Search Here</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
