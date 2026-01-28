import "./ContactForm.css"

function ContactForm() {
  return (
    <form id="contact__form" action="">
        <label htmlFor="">Name:</label>
        <input type="text"/>
        <label htmlFor="">Email:</label>
        <input type="email"/>
        <label htmlFor="">Message:</label>
        <textarea name="" id=""></textarea>
        <button className="contact__form--submit">Send Message To Cinemations</button>
    </form>
  )
}

export default ContactForm