import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'text-orange-600 border-b-2 border-orange-600'
      : 'text-white hover:text-orange-400 transition-colors duration-300';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-20 bg-blue-900 shadow-md">
      <MaxWidthWrapper className="flex justify-between items-center p-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <ul className="flex gap-8">
            <li>
              <Link to="/" className={getLinkClass('/')}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass('/about')}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
            </li>
            <li>
              <Link to="/gallery" className={getLinkClass('/gallery')}>Gallery</Link>
            </li>
          </ul>
          <button
            className="ml-4 px-4 py-2 text-white bg-orange-600 rounded-full hover:bg-orange-700 focus:outline-none transition-transform transform hover:scale-105"
            onClick={() => window.location.href = "https://maps.app.goo.gl/nRY96BKSSgZhzUzV9"}
          >
            Visit
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white text-3xl focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 left-0 bg-blue-1000 text-white w-full p-6 z-30 flex flex-col items-center transition-transform transform">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link to="/" className="block py-2" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2" onClick={toggleMenu}>Contact</Link>
            </li>
            <li>
              <Link to="/gallery" className="block py-2" onClick={toggleMenu}>Gallery</Link>
            </li>
            <li>
              <button
                className="block py-2 text-orange-600 hover:text-orange-400 focus:outline-none"
                onClick={() => {
                  toggleMenu();
                  window.location.href = "https://maps.app.goo.gl/nRY96BKSSgZhzUzV9";
                }}
              >
                Visit
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
