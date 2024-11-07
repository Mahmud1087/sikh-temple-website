const Footer: React.FC = () => {
    return (
      <footer className="bg-black text-white py-6 mt-1">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">Contact Us: info@sikhtemplemombasa.org</p>
            <p className="text-lg">Phone: 0123456789</p>
          </div>
  
          {/* Quick Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/about" className="text-orange-600 hover:text-orange-400">About Us</a>
            <a href="/events" className="text-orange-600 hover:text-orange-400">Events</a>
            <a href="/contact" className="text-orange-600 hover:text-orange-400">Contact</a>
          </div>
  
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://www.facebook.com/msasikhs/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-400">
              Facebook
            </a>
            <a href="https://twitter.com/sikhtemplemombasa" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-400">
              Twitter
            </a>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>&copy; 2024 Gurdwara Siri Guru Singh Sabha Mombasa. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  