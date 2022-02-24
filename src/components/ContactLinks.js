import React from 'react';
import { BsFilePdfFill, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function ContactLinks() {
  return (
    <div className="contact-container">
      <div className="main-contacts">
        <a href="https://github.com/vdionysio" target="_blank" rel="noreferrer">
          GitHub <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/vdionysio/" target="_blank" rel="noreferrer">
          Linkedin <BsLinkedin />
        </a>
      </div>
      <div className="curriculo-container">
        <a href="#" target="_blank" rel="noreferrer">
          Curriculo <BsFilePdfFill />
        </a>
      </div>
    </div>
  );
}
