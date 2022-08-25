import React from "react";
import './contactgrid.scss'
const ContactGrid = () => {
  return (
    <div className="contact-grid">
      <div className="contact-phone card contact-card contact-card-mobile ">
        <a className = "contact-link" href="">
          <i className="fa-solid fa-phone contact-icon contact-link" />
          <h1 className='contact-card-header'>
            Call
          </h1>
        </a>
      </div>
      <div className="contact-email card contact-card contact-card-mobile">
        <a className = "contact-link" href="">
          <i className="fa-solid fa-envelope contact-icon contact-link" />
          <h1 className='contact-card-header'>
            Email
          </h1>
        </a>
      </div>
      <div className="contact-instagram card contact-card contact-card-mobile">
        <a className = "contact-link" href="">
          <i className="fa-brands fa-instagram contact-icon contact-link" />
          <h1 className='contact-card-header'>
            Instagram
          </h1>
        </a>
      </div>
    </div>
  );
};

export default ContactGrid;
