import React from "react";
import "./App.css";
import ccino from "./images/ccino.jpg";
export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <h4>For any complaints, please forward your plea to Ccino.</h4>
      <img width="90%" src={ccino} alt="no complaints!" />
      <h4>He'll get back to you as soon as his nap is over.</h4>
    </div>
  );
}
