import "./ContactForm.css";

function ContactForm({ setSubmit }) {
    
  function handleSubmit(event) {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) return;

    setSubmit(true);
  }

  return (
    <form id="contact__form" action="" onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label>
      <input type="text" required />
      <label htmlFor="">Email:</label>
      <input type="email" required />
      <label htmlFor="">Message:</label>
      <textarea name="" id="" required></textarea>
      <button className="contact__form--submit" type="submit">
        Send Message To Cinemations
      </button>
    </form>
  );
}

export default ContactForm;
