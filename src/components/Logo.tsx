import React from 'react';

type LogoProps = {
  imageSrc?: string;
  altText?: string;
  text?: string;
};

const Logo: React.FC<LogoProps> = ({
  imageSrc = '/logo2.jpeg',
  altText = 'Logo',
  text = 'Sikh Temple',
}) => {
  return (
    <div className='flex items-center space-x-2'>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={altText}
          className='w-12 h-12 md:w-16 md:h-16'
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
