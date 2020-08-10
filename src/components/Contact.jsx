import React from 'react';
import iconGithubContact from '../assets/contact/github-contact.svg';
import iconLinkedinContact from '../assets/contact/linkedin-contact.svg';
import iconMailContact from '../assets/contact/mail-contact.svg';
import iconPhoneContact from '../assets/contact/phone-contact.svg';

const Contact = () => (
  <div>
    <span>CONTACTEMOS</span>
    <div>
      <img src={iconMailContact} alt="Mail" className="" />
      <span></span>
    </div>
    <div>
      <img src={iconPhoneContact} alt="Phone" className="" />
      <span></span>
    </div>
    <div>
      <img src={iconGithubContact} alt="Github" className="" />
      <span></span>
    </div>
    <div>
      <img src={iconLinkedinContact} alt="Linkedin" className="" />
      <span></span>
    </div>
  </div>
);
