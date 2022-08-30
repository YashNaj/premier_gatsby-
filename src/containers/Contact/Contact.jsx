import React from 'react'
import ContactGrid from '../../components/contactGrid/ContactGrid';
import Footer from '../../components/footer/Footer';
import './contact.scss'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-header gradient__text'>
         Contact Us  
      </div>
      <div className='contact'>
        <ContactGrid />
      </div>
    </div>
  )
}

export default Contact;