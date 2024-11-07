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
    <nav className="sticky top-0 z-10 bg-blue-900 shadow-md">
      <MaxWidthWrapper className="flex justify-between items-center p-4">
        <Logo />
        {/* Desktop and larger screens */}
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
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg text-black"
            />
            <button className="absolute right-0 top-0 px-4 py-2 text-white bg-orange-600 rounded-r-lg">
              Search
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>☰</button>
          {isMenuOpen && (
            <div className="absolute top-0 right-0 bg-black text-white w-48 p-4">
              <ul>
                <li><Link to="/" className="block py-2">Home</Link></li>
                <li><Link to="/about" className="block py-2">About</Link></li>
                <li><Link to="/contact" className="block py-2">Contact</Link></li>
                <li><Link to="/gallery" className="block py-2">Gallery</Link></li>
              </ul>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
