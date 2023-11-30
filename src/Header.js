import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <header className="text-white text-center py-6">
      <h1 className="name">Mahmoud Saleh</h1>
      <div className="nickname">
        <p>(Zaza)</p>
      </div>
      {/* <p>
        <a
          href="mailto:NA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={30} />
        </a>
      </p>
      <a href="tel:NA" target="_blank" rel="noopener noreferrer">
        <FaPhone size={30} />
      </a> */}
      <div className="contact">
        <a
          href="https://www.linkedin.com/in/mahmoudmahfouz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/mahmoudmahfouz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <p>
        <strong>Location:</strong> Amsterdam, The Netherlands
      </p>
    </header>
  );
}

export default Header;
