import React, { useState } from "react";
import "../css/Contact.css";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Thank you for contacting me! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>
        Have questions or want to work together? Fill out the form below to
        reach me!
      </p>
      <form onSubmit={handleSubmit} aria-label="Contact form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-label="Your Name"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Your Email"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          aria-label="Your Message"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {status && <p className={`status-message ${status.includes("Thank") ? "success" : "error"}`}>{status}</p>}
    </div>
  );
};

export default Contact;
