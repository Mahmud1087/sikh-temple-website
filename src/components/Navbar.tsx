import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'text-orange-600' : 'text-white';
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
        <div className="hidden md:flex gap-10">
          <ul className="flex gap-10">
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
          <div className="relative">
            <button
              className="px-4 py-2 text-white bg-orange-600 rounded-full hover:bg-orange-700 focus:outline-none"
              onClick={() => window.location.href = "https://maps.app.goo.gl/nRY96BKSSgZhzUzV9"}
            >
              Visit
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white text-3xl" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 left-0 bg-gray-900 text-white w-ful p-4 z-30">
          <ul className="flex flex-col space-y-2 ">
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
                className="block py-2 text-orange-600 bg-transparent hover:text-orange-400 focus:outline-none"
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
