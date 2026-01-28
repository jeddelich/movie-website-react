import "./Confirmation.css";

function Confirmation({modalClose}) {
  return (
    <div className="confirmation">
      <div className="confirmation__title">You're Golden!</div>
      <div className="confirmation__message">
        Your message has been sent to Cinemations! We'll let you know when the
        movie has been added!
      </div>
      <button className="confirmation--button" onClick={modalClose}>
        <figure className="confirmation__icon--wrapper">
          <i className="fa-solid fa-arrow-left-long"></i>
        </figure>
        <h4>Search For Other Movies</h4>
      </button>
    </div>
  );
}

export default Confirmation;
