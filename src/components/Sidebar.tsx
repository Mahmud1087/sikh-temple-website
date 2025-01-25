import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

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

  const sidebarBackgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const sidebarPanelVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { type: "spring", stiffness: 50 },
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          {...sidebarBackgroundVariants}
          className="w-screen h-screen bg-black/50 fixed z-50 top-0 left-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            {...sidebarPanelVariants}
            className="absolute top-0 right-0 w-2/3 sm:w-1/3 p-6 flex flex-col bg-blue-500 h-full text-white"
          >
            <ul className="flex flex-col space-y-6 mt-8">
              {menulinks.map((menu, i) => (
                <li key={i} className="w-full">
                  {menu.dropdown ? (
                    <div>
                      <button
                        className="w-full text-left hover:text-yellow-300 font-medium flex justify-between items-center"
                        onClick={() => toggleDropdown(menu.label)}
                      >
                        {menu.label}
                        <span className="text-yellow-300 text-lg">
                          {expandedMenu === menu.label ? "-" : "+"}
                        </span>
                      </button>
                      {expandedMenu === menu.label && (
                        <ul className="mt-3 ml-4 space-y-4">
                          {menu.dropdown.map((submenu, j) => (
                            <li key={j}>
                              <NavLink
                                to={submenu.to}
                                className={({ isActive }) =>
                                  isActive
                                    ? "text-yellow-300 font-semibold"
                                    : "text-white hover:text-yellow-300"
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
                      to={menu.to || "#"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-300 font-semibold"
                          : "text-white hover:text-yellow-300"
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
              className="flex items-center justify-center gap-3 mt-10 px-4 py-2 bg-yellow-300 text-blue-600 font-medium rounded-md hover:bg-yellow-400 transition-transform transform hover:scale-105"
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
