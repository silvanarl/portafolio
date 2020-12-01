import React from 'react';
import iconGithubContact from '../assets/contact/github-white.svg';
import iconLinkedinContact from '../assets/contact/linkedin-white.svg';
import iconMailContact from '../assets/contact/mail-white.svg';
import iconPhoneContact from '../assets/contact/phone-white.svg';

const Contact = () => (
  <div id="contact" className="paddCont content-contact">
    {/* <p className="textCenter mrg20">CONTACTEMOS</p> */}
    <h1 className="contact-title">PUEDES CONTACTARME EN:</h1>
    <div className="contactDiv">
      <div className="center">
        <a href="mailto:ramossilvana495@gmail.com">
          <img src={iconMailContact} alt="Mail" className="iconContact" />
          <span className="quicksand textC">
            ramossilvana495@gmail.com
          </span>
        </a>
      </div>
      <div className="center">
        <a href="tel:+01957298663" title="llamar">
          <img src={iconPhoneContact} alt="Phone" className="iconContact" />
          <span className="quicksand textC">957298663</span>
        </a>
      </div>
      <div className="center">
        <img src={iconGithubContact} alt="Github" className="iconContact" />
        <a href="https://github.com/silvanarl" target="_blank" rel="noreferrer">
          <span className="quicksand textC">silvanarl</span>
        </a>
      </div>
      <div className="center">
        <img src={iconLinkedinContact} alt="Linkedin" className="iconContact" />
        <a href="https://linkedin.com/in/silvanaramoslescano/" target="_blank" rel="noreferrer">
          <span className="quicksand textC">silvanaramoslescano</span>
        </a>
      </div>
      <div className="contentCv">
        <a href="assets/cv_silvanarl_Front-end.pdf" target="_blank">
          <button className="btnCv" type="button">Ver CV</button>
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
