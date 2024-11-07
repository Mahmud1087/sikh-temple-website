import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

type Menulink = {
  to: string;
  label: string;
};

type SidebarProps = {
  menulinks: Menulink[];
  isMenuOpen: boolean;
};

const Sidebar = ({ isMenuOpen, menulinks }: SidebarProps) => {
  return (
    <>
      {isMenuOpen && (
        <div className='w-screen h-screen bg-black/55 relative z-50 left-0 top-0 sm:hidden'>
          <motion.div
            // initial={{ x: 0 }}
            // animate={{ x: 100 }}
            // transition={{ duration: 200 }}
            className='absolute top-0 right-0 w-2/4 p-6 flex flex-col items-center transition-transform transform bg-blue-900 h-full'
          >
            <ul className='flex flex-col space-y-10 text-center mt-5'>
              {menulinks.map((menu, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      to={menu.to}
                      className={({ isActive }) =>
                        isActive
                          ? 'active'
                          : 'text-white/70 hover:border-b-2 hover:border-orange-600 hover:py-1'
                      }
                    >
                      {menu.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
