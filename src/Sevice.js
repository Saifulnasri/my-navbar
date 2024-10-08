import React, { useEffect } from "react";
import "./Contact.css"; // Import the CSS file

function Contact() {
  // ใช้ useEffect เพื่ออัปเดต document.title
  useEffect(() => {
    document.title = "Contact - ติดต่อเรา"; // อัปเดต title ของหน้า
  }, []); // ทำงานครั้งเดียวหลังจาก component mount

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
