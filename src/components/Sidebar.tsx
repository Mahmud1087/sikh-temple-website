import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { cn } from '../lib/utils';

type Menulink = {
  to?: string;
  label: string;
  dropdown?: { to: string; label: string }[];
};

type SidebarProps = {
  menulinks: Menulink[];
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isMenuOpen, menulinks, setIsMenuOpen }: SidebarProps) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleDropdown = (menuLabel: string) => {
    setExpandedMenu((prev) => (prev === menuLabel ? null : menuLabel));
  };

  const framerSidebarBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const framerSidebarPanel = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { type: 'spring', stiffness: 50 },
  };

  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <motion.div
          {...framerSidebarBackground}
          className={cn('w-screen h-screen bg-black/55 fixed z-50 left-0 top-16 sm:hidden')}
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            {...framerSidebarPanel}
            className="absolute top-0 right-0 w-2/4 p-6 flex flex-col items-center transition-transform transform bg-blue-900 h-full"
          >
            <ul className="flex flex-col space-y-8 text-center mt-5">
              {menulinks.map((menu, i) => (
                <li key={i} className="w-full">
                  {menu.dropdown ? (
                    <div>
                      <button
                        className="w-full text-white/70 text-left hover:border-b-2 hover:border-yellow-600 hover:py-1"
                        onClick={() => toggleDropdown(menu.label)}
                      >
                        {menu.label}
                      </button>
                      {expandedMenu === menu.label && (
                        <ul className="mt-2 space-y-4 pl-4">
                          {menu.dropdown.map((submenu, j) => (
                            <li key={j}>
                              <NavLink
                                to={submenu.to}
                                className={({ isActive }) =>
                                  isActive
                                    ? 'active'
                                    : 'text-white/70 hover:border-b-2 hover:border-yellow-600 hover:py-1'
                                }
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {submenu.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={menu.to || '#'}
                      className={({ isActive }) =>
                        isActive
                          ? 'active'
                          : 'text-white/70 hover:border-b-2 hover:border-yellow-600 hover:py-1'
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {menu.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            <a
              className="flex items-center gap-3 mt-10 ml-4 px-4 py-1 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none transition-transform transform hover:scale-105"
              href="https://maps.app.goo.gl/nRY96BKSSgZhzUzV9"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Visit</span>
              <BsArrowRight />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
