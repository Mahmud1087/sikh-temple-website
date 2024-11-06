import React from 'react';

type LogoProps = {
  imageSrc?: string;
  altText?: string;
  text?: string;
};

const Logo: React.FC<LogoProps> = ({ imageSrc = './public/logo2.jpeg', altText = 'Logo', text = 'Sikh Temple' }) => {
  return (
    <div className="flex items-center space-x-2">
      {imageSrc ? (
        <img src={imageSrc} alt={altText} className="w-16 h-16" />
      ) : (
        <div className="text-2xl font-bold text-blue-600">{text}</div>
      )}
    </div>
  );
};

export default Logo;
