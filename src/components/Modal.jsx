import { useState } from "react";
import Confirmation from "./Confirmation";
import ContactForm from "./ContactForm";
import "./Modal.css";
import ModalContent from "./ModalContent";

function Modal({
  modalTitle,
  modalPara,
  modalClose,
  contactModal,
  aboutModal,
}) {
  const [submit, setSubmit] = useState(false);

  return (
    <div className="modal">
      <div className="module__container">
        <div className="module__row">
          {contactModal &&
            (!submit ? (
              <>
                <ModalContent
                  modalTitle={modalTitle}
                  modalPara={modalPara}
                  modalClose={modalClose}
                />
                <ContactForm setSubmit={setSubmit} />
              </>
            ) : (
              <Confirmation modalClose={modalClose}/>
            ))}
          {aboutModal && (
            <>
              <ModalContent
                modalTitle={modalTitle}
                modalPara={modalPara}
                modalClose={modalClose}
              />
              <button className="about__modal--footer" onClick={modalClose}>
                <figure className="about__icon--wrapper">
                  <i className="fa-solid fa-arrow-left-long"></i>
                </figure>
                <h4>Start Your Search Here</h4>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
