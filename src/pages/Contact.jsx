import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {

  return (
    <div id="contact" className="w-full flex flex-col items-center justify-center bg-gray-900 px-4 sm:px-8 py-12">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl text-amber-100 font-bold mb-8">
        Contact Me
      </h1>

      {/* Social Links */}
      <div className="flex gap-8 mb-12">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 transition-colors text-3xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/lakshya-kakran-468329325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 transition-colors text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-gray-400 transition-colors text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:kakranlakshya24@gmail.com"
          className="text-red-500 hover:text-red-400 transition-colors text-3xl"
        >
          <HiOutlineMail />
        </a>
      </div>
    </div>
    // 
  );
};

export default Contact;
