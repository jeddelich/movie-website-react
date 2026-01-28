import "./ContactForm.css"

function ContactForm({setSubmit}) {

  return (
    <form id="contact__form" action="">
        <label htmlFor="">Name:</label>
        <input type="text" required/>
        <label htmlFor="">Email:</label>
        <input type="email" required/>
        <label htmlFor="">Message:</label>
        <textarea name="" id="" required></textarea>
        <button className="contact__form--submit" onClick={() => setSubmit(true)}>Send Message To Cinemations</button>
    </form>
  )
}

export default ContactForm