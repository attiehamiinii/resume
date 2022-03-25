import React from 'react';
import { useState, useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { ImLocation2, ImPhone } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  const formref = useRef();
  const [done, setDone] = useState(false);

  const handelSubmit = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j2zrozp',
        'template_dg9o5az',
        formref.current,
        'user_qKPFXKjSz5SwUVNEeOQFm',
      )
      .then(
        result => {
          console.log(result.text);
          setDone(true);
        },
        error => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="comman">
          <h1 className="main-header">Contact Me</h1>
        </div>
        <div className="plans">
          <div className="plan">
            <div className="logo__img-location">
              <ImLocation2 />
            </div>
            <h2 className="plan__title">Locate</h2>
            <p className="plan__info">Toronto, Canada</p>
          </div>
          <div className="plan">
            <div className="logo__img-call">
              <ImPhone />
            </div>
            <h2 className="plan__title">Call Me</h2>
            <p className="plan__info">+1(647)684_8489</p>
          </div>
          <div className="plan">
            <div className="logo__img-email">
              <HiOutlineMail />
            </div>
            <h2 className="plan__title">Email</h2>
            <p className="plan__info">attieh.amiinii@ gmail.com</p>
          </div>
        </div>
        <div className="container__email">
          <div className="holders">
            <form className="form_email" ref={formref} onSubmit={handelSubmit}>
              <input className="holder" type="text" placeholder="Name" name="user_name" />
              <input className="holder" type="text" placeholder="Subject" name="user_subject" />
              <input className="holder" type="text" placeholder="Email" name="user_email" />
              <textarea className="msg-holder" rows="5" placeholder="Message" name="message" />
              <button className="primary-btn2"> Submit </button>
              {done && 'Thank you'}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
