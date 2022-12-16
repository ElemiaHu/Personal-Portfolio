import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y8uq17a', 'template_s2pekoo', form.current, 'GOFzTYTEAxn02hOEY')
      .then((result) => {
        setSent(true);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return <>
    <div className='contact-container'>
        <form ref={form} onSubmit={sendEmail}>
            <div className='contact-title'>Contact me</div>
            <div className='input'>
                <div className='contact-input'>
                    <label>Name</label>
                    <input className="contact-name" type="text" name="user_name" required />
                </div>
                <div className='contact-input'>
                    <label>Email</label>
                    <input className="contact-email" type="email" name="user_email" required/>
                </div>
            </div>
            
            <div className='subject-input'>
                <label>Subject</label>
                <input className="subject" type="text" name="subject" required/>
            </div>
            <div className='message-input'>
                <label>Message</label>
                <textarea className="message" name="message"required/>
            </div>
            <div className='submit'>
                <input className="submit-button" type="submit" value="Send" />
            </div>
        <div className={sent == true ? "sent" : "unsent"}>Your message has been sent. <br/>Thank you for reaching out!</div>
        </form>
    </div>
  </>
}

export default Contact;