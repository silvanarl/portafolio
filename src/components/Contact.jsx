import React from 'react';
import iconGithubContact from '../assets/contact/github-contact.svg';
import iconLinkedinContact from '../assets/contact/linkedin-contact.svg';
import iconMailContact from '../assets/contact/mail-contact.svg';
import iconPhoneContact from '../assets/contact/phone-contact.svg';

const Contact = () => (
  <div>
    <p className="textCenter mrg20">CONTACTEMOS</p>
    <div>
      <img src={iconMailContact} alt="Mail" className="iconContact" />
      <span className="quicksand">ramossilvana495@gmail.com</span>
    </div>
    <div>
      <img src={iconPhoneContact} alt="Phone" className="iconContact" />
      <span className="quicksand">957298663</span>
    </div>
    <div>
      <img src={iconGithubContact} alt="Github" className="iconContact" />
      <a href="https://github.com/silvanarl" target="_blank" rel="noreferrer"><span className="quicksand">silvanarl</span></a>
    </div>
    <div>
      <img src={iconLinkedinContact} alt="Linkedin" className="iconContact" />
      <a href="https://linkedin.com/in/silvanaramoslescano/" target="_blank" rel="noreferrer"><span className="quicksand">silvanaramoslescano/</span></a>
    </div>
  </div>
);

export default Contact;
