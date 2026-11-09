function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:tafakurtarig@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <h1>Let’s Get in Touch</h1>
      <p>
        Have a question or an opportunity to share? Send me a message.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message"
          rows={5}
          required
        />

        <button type="submit">Continue to Email</button>
      </form>

      <p>
        Or email me directly at{" "}
        <a href="mailto:tafakurtarig@gmail.com">
          tafakurtarig@gmail.com
        </a>
      </p>
    </section>
  );
}

export default Contact;