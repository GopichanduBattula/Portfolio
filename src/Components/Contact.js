import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yt6lmcq', 'template_40jr1vu', form.current, {
        publicKey: 'icPN9EO6dxgGUn8rY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

const notify = () => toast("You have submited the form.Thank You!");
  return (
    <div className='contact'>
      <div><h1>Contact :</h1></div>
      <div>
      <h1 className='contact-h1'>Submit the below form or shoot me an email at <mark>battulagopichandu@gmail.com</mark></h1>
      </div>
    <form ref={form} onSubmit={sendEmail} className='contact-form'>
      <label>Name</label>
      <input type="text" name="from_name" placeholder='Write Your Name Here'
      className='contact-input'
      />
      <label>Email</label>
      <input type="email" name="from_email" placeholder='Write Your Email Here'
      className='contact-input'
      />
      <label>Message</label>
      <textarea name="message" placeholder='Write The Message Here'
       className='contact-input-msg'
      />
      <input type="submit" value="Contact Me"
       className='contact-btn'
      onClick={notify}
      />
      <ToastContainer />
    </form>
    </div>
  );
};

export default Contact;