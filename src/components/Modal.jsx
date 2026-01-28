import "./Modal.css";

function Modal({ modalTitle, modalPara}) {
  return (
    <div className="modal">
      <div className="module__container">
        <div className="module__row">
          <h3 className="modal__title">{modalTitle}</h3>
          <p className="modal__para">{modalPara}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
