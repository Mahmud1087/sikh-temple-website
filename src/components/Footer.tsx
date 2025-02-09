import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo and Contact */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <img
            src="/sikhism-logo.png"
            alt="Gurdwara Siri Guru Singh Sabha Mombasa Logo"
            className="h-12 mb-4 mx-auto md:mx-0"
          />
          <p className="text-lg">
            <a href="mailto:sgssgurudwaramsa@gmail.com" className="text-yellow-600 hover:text-yellow-400">
              <u>Email Us</u>
            </a>
          </p>
          <p className="text-lg">Phone: +254 722 415378</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/about" className="text-yellow-600 hover:text-yellow-400">
            About Us
          </Link>
          <Link to="/events" className="text-yellow-600 hover:text-yellow-400">
            Events
          </Link>
          <Link to="/gallery" className="text-yellow-600 hover:text-yellow-400">
            Gallery
          </Link>
          <Link to="/contact" className="text-yellow-600 hover:text-yellow-400">
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-6 mt-6 md:mt-0">
          <a
            href="https://www.facebook.com/msasikhs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          {/*
          <a
            href="https://twitter.com/sikhtemplemombasa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 hover:text-gray-400 text-xl"
            aria-label="Twitter"
          >
            <BsTwitterX />
          </a>
        </div>
      </div>
      */}

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 px-6">
        <hr className="border-t border-gray-600 mb-6" />
        <p>&copy; 2025 Gurdwara Siri Guru Singh Sabha Mombasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
