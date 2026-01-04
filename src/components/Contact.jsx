import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => alert("Message Sent"))
      .catch(() => alert("Error"));
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <button className="btn">Send</button>
      </form>
    </section>
  );
}

export default Contact;
