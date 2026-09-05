import React from "react";
import { FaGithub, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t bg-linear-to-br from-red-400 to-white dark:bg-linear-to-br dark:from-red-950 dark:to-black py-6">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex justify-center items-center flex-col">
            <h3 className="text-xl text-red-500 font-bold dark:text-red-400">
              PORTFOLIO
            </h3>
            <p className="text-md">Software Developer</p>
          </div>
          <div className="flex gap-4">
            <a target="_blank" href="https://github.com/nazeedkhan" className="hover:text-red-500 transition-colors">
              <FaGithub size={22} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/nazeed-khan" className="hover:text-red-500 transition-colors">
              <FaLinkedin size={22} />
            </a>
            <a target="_blank" href="https://www.instagram.com/nazeedkhan7785" className="hover:text-red-500 transition-colors">
              <FaInstagram size={22} />
            </a>
          </div>
          <p className="text-md flex items-center gap-1">
            {currentYear} - Made with <FaHeart className="text-red-500" /> by{" "}
            <span className="font-semibold text-red-500">Nazeed Khan</span>
          </p>
        </div>
        <div className="h-24"></div>
      </footer>
    </>
  );
};

export default Footer;
