import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
export default function Footer() {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="GPT3 Logo" />
          <p>A C Meyers Vænge 9 2450 København SV</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overrons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>A C Meyers Vænge 9 2450 København SV</p>
          <p>+00 44556655</p>
          <p>info@paymen.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}
