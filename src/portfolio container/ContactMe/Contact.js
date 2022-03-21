import React from 'react';
import {useState,useRef} from  'react'
import './Contact.css';

import { Button} from '@chakra-ui/react';
import email from '../../assets/Home/email.png';
import phone from '../../assets/Home/phone.png'
import location from '../../assets/Home/location.png'
import emailjs from "emailjs-com";
const Contact = () => {
    const formref = useRef();
    const [done, setDone] = useState(false);
 
  
  
    const handelSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_j2zrozp",
          "template_dg9o5az",
          formref.current,
          "user_qKPFXKjSz5SwUVNEeOQFm"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
  return (
      <div className='contact'>
          <div className='container'>
              <div className='comman'>
                  <h1 className='main-header'>Contact Me</h1>
              </div>
              <div className='plans'>
                  <div className='plan'>
                  <img className='logo__img-location' src={location} alt=""></img>
                  <h2 className='plan__title'>Locate</h2>
                  <p className='plan__info'> Eglinton, Toronto</p>
              </div>
              <div className='plan'>
                  <img className='logo__img-call' src={phone} alt=""></img>
                  <h2 className='plan__title'>Give me a call</h2>
                  <p className='plan__info'>Cellphone:+1(647)684-8489</p>
              </div>
              <div className='plan'>
                  <img className='logo__img-email' src={email} alt=""></img>
                  <h2 className='plan__title'>Email</h2>
                  <p className='plan__info'>attieh.amiinii@gmail.com</p>
              </div>
              </div>
              <div className='container__email'>
                  <div className='holders'>
                  <form className='form_email' ref={formref} onSubmit={handelSubmit}>
              

            <input
             className='holder'
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
                 className='holder'
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
                 className='holder'
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
                className='msg-holder'
              rows="5"
              placeholder="Message"
              name="message"
            />
           <Button
              _hover={{
                background: '#32354b',
                color: '#ff4a57',
                borderColor: '#ff4a57',
              }}
              boxShadow="md"
              background="#ff4a57"
              color="#ffffff"
              colorScheme="#32354b"
              size="md"
              height="48px"
              width="150px"
              mt="12"
              fontSize="20px"
              fontWeight="semibold"
              borderColor="#ff4a57"
              borderRadius="30"
              font-family="Signika Negative"
            >
              Submit
            </Button>
            {done && "Thank you..."}
          </form>
                  </div>
          
              </div>
          </div>
      </div>
  )
};

export default Contact;

