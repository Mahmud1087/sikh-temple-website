import { Link } from 'react-router-dom';
import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';

const Navbar = () => {
  return (
    <nav className=''>
      <MaxWidthWrapper className='flex justify-between items-center'>
        <Logo />
        <ul className='flex gap-10'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/gallery'>Gallery</Link>
          </li>
        </ul>
      </MaxWidthWrapper>
    </nav>
  );
};
export default Navbar;
