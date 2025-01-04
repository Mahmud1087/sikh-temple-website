import React from 'react';

type LogoProps = {
  imageSrc?: string;
  altText?: string;
  text?: string;
};

const Logo: React.FC<LogoProps> = ({
  imageSrc = '/sikhism-logo.png',
  // imageSrc = '/logo2.jpeg',
  altText = 'Logo',
  text = 'Sikh Temple',
}) => {
  return (
    <div className='flex items-center space-x-2'>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={altText}
          className='w-10 h-10 sm:h-12 sm:w-12'
        />
      ) : (
        <div className='text-2xl font-bold text-blue-600 md:text-3xl'>
          {text}
        </div>
      )}
    </div>
  );
};

export default Logo;
