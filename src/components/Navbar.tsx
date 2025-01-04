import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import { FaTimes } from 'react-icons/fa';

const menuLinks = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  {
    label: 'Affiliates',
    dropdown: [
      { to: '/affiliates/medical-fund', label: 'Medical Fund' },
      { to: '/affiliates/educational-fund', label: 'Educational Fund' },
      { to: '/affiliates/sikh-youth-of-mombasa', label: 'Sikh Youth of Mombasa' },
    ],
  },
  { to: '/donate', label: 'Donate' },
];


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 bg-blue-500 shadow-md">
      <MaxWidthWrapper className="flex justify-between items-center h-16 sm:h-20">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          <ul className="flex gap-5 relative">
            {menuLinks.map((menu, i) => {
              if (menu.dropdown) {
                return (
                  <li
                    key={i}
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <span
                      className="text-white/70 hover:border-b-2 hover:border-yellow-300 hover:py-1 cursor-pointer"
                    >
                      {menu.label}
                    </span>
                    {isDropdownOpen && (
                      <ul className="absolute left-0 mt-2 bg-white rounded-lg shadow-md overflow-hidden">
                        {menu.dropdown.map((item, idx) => (
                          <li key={idx}>
                            <NavLink
                              to={item.to}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={i}>
                  <NavLink
                    to={menu.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'active'
                        : 'text-white/70 hover:border-b-2 hover:border-yellow-300 hover:py-1'
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menu.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <a
            className="flex items-center gap-3 ml-4 px-4 py-1 text-white bg-yellow-300 rounded-md hover:bg-yellow-500 focus:outline-none transition-transform transform hover:scale-105"
            href="https://maps.app.goo.gl/nRY96BKSSgZhzUzV9"
          >
            <span>Visit</span>
            <BsArrowRight />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white text-2xl focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-red-500" /> : <FaBars />}
          </button>
        </div>
      </MaxWidthWrapper>

      {/* Sidebar */}
      <Sidebar
        menulinks={menuLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
