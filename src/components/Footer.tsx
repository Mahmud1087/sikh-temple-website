import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className='bg-black text-white py-8 '>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Logo */}
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <img
            src='/sikhism-logo.png'
            // src='/logo1.jpeg'
            alt='Gurdwara Siri Guru Singh Sabha Mombasa Logo'
            className='h-12 mb-4 mx-auto md:mx-0'
          />
              <p className='text-lg'><a href="mailto: sgssgurudwaramsa@gmail.com"> <u>email us</u> </a></p>
              {/* <p className='text-lg'>Phone: 0123456789</p>*/}
        </div>

        {/* Quick Links */}
        <div className='flex flex-col items-center mt-6 md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0 sm:mt-0'>
          <a
            href='/about'
            className='text-yellow-600 hover:text-yellow-400'
            aria-label='About Us'
          >
            About Us
          </a>
          <a
            href='/Events'
            className='text-yellow-600 hover:text-yellow-400'
            aria-label='Events'
          >
            Events
          </a>
          <a
            href='/gallery'
            className='text-yellow-600 hover:text-yellow-400'
            aria-label='Gallery'
          >
            Gallery
          </a>
          <a
            href='/contact'
            className='text-yellow-600 hover:text-yellow-400'
            aria-label='Contact'
          >
            Contact
          </a>
        </div>

        {/* Social Media Links 
        <div className='flex items-center space-x-6 mb-4 mt-10 sm:mt-0 md:mb-0'>
          <a
            href='https://www.facebook.com/msasikhs/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:text-blue-400 text-2xl'
            aria-label='Facebook'
          >
            <FaFacebook />
          </a>
          <a
            href='https://twitter.com/sikhtemplemombasa'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-50 hover:text-gray-400 text-xl'
            aria-label='Twitter'
          >
            <BsTwitterX />
          </a>
        </div>*/}
      </div>
      

      {/* Copyright */}
      <div className='text-center text-gray-500 text-sm mt-10 px-9'>
        <hr className='border-t border-gray-600 mb-6' />
        <p>
          &copy; 2025 Gurdwara Siri Guru Singh Sabha Mombasa. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
