import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import { FaTimes } from 'react-icons/fa';

const menuLinks = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
  {
    to: '/Affiliates',
    label: 'Affiliates',
  },
  {
    to: '/Donate',
    label: 'Donate',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-20 bg-blue-500 shadow-md'>
      <MaxWidthWrapper className='flex justify-between items-center h-16 sm:h-20'>
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-3'>
          <ul className='flex gap-5'>
            {menuLinks.map((menu, i) => {
              return (
                <li key={i}>
                  <NavLink
                    to={menu.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'active'
                        : 'text-white/70 hover:border-b-2 hover:border-yellow-600 hover:py-1'
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
            className='flex items-center gap-3 ml-4 px-4 py-1 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none transition-transform transform hover:scale-105'
            href='https://maps.app.goo.gl/nRY96BKSSgZhzUzV9'
          >
            <span>Visit</span>
            <BsArrowRight />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className='md:hidden flex items-center'>
          <button
            className='text-white text-2xl focus:outline-none'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className='text-red-500' /> : <FaBars />}
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
