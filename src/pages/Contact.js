// src/components/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  // رابط الـ API — لو حطيتي proxy في package.json ما تحتاجي http://localhost:5000
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    try {
      const res = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('Error: cannot reach server.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <form onSubmit={sendEmail}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
          />
        </label>

        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Your Message"
            rows={5}
          />
        </label>

        <button type="submit" disabled={sending || !name || !email || !message}>
          {sending ? 'Sending...' : 'Send'}
        </button>
      </form>

      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
}

export default Contact;