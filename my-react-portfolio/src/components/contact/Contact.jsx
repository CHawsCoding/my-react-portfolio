import "./Contact.css";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact__section" id="contact">
      <h1 className="heading__one">Contact Me</h1>
      <form action="">
        <div className="input__container">
          <label htmlFor="name">Full Name</label>
          <input type="text" required />
        </div>
        <div className="input__container">
          <label htmlFor="name">Email Address</label>
          <input type="email" required />
        </div>
        <div className="input__container">
          <label htmlFor="name">Message</label>
          <textarea required></textarea>
        </div>
        <button>
          <span>Submit</span>
          <FaTelegramPlane />
        </button>
      </form>
    </section>
  );
}

export default Contact;
