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
      <div className="flex container-link-contact">
        <a href="mailto:ramossilvana495@gmail.com">
          <img src={iconMailContact} alt="Mail" className="iconContact" />
        </a>
        <a className="link-contact" href="mailto:ramossilvana495@gmail.com">
          <span className="quicksand textC">
            ramossilvana495@gmail.com
          </span>
        </a>
      </div>
      <div className="flex container-link-contact">
        <a href="tel:+01957298663" title="llamar">
          <img src={iconPhoneContact} alt="Phone" className="iconContact" />
        </a>
        <a className="link-contact" href="tel:+01957298663" title="llamar">
          <span className="quicksand textC">957298663</span>
        </a>
      </div>
      <div className="flex container-link-contact">
        <a href="https://github.com/silvanarl" target="_blank" rel="noreferrer">
          <img src={iconGithubContact} alt="Github" className="iconContact" />
        </a>
        <a className="link-contact" href="https://github.com/silvanarl" target="_blank" rel="noreferrer">
          <span className="quicksand textC">silvanarl</span>
        </a>
      </div>
      <div className="flex container-link-contact">
        <a href="https://linkedin.com/in/silvanaramoslescano/" target="_blank" rel="noreferrer">
          <img src={iconLinkedinContact} alt="Linkedin" className="iconContact" />
        </a>
        <a className=" link-contact" href="https://linkedin.com/in/silvanaramoslescano/" target="_blank" rel="noreferrer">
          <span className="quicksand textC">silvanaramoslescano</span>
        </a>
      </div>
      <div className="contentCv">
        <a href="http://drive.google.com/uc?export=view&id=1M_9evNZU1VrdnMqAy7s8jc0dXb3PlmX8" target="_blank">
          <button className="btnCv" type="button">Ver CV</button>
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
