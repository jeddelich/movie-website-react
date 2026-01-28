import "./ModalContent.css"

function ModalContent({modalPara, modalTitle, modalClose}) {
  return (
    <>
      <div className="modal__header">
        <h3 className="modal__title">{modalTitle}</h3>
        <button className="modal__icon--wrapper" onClick={modalClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <p className="modal__para">{modalPara}</p>
    </>
  );
}

export default ModalContent;
