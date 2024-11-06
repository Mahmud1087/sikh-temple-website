import React, { useEffect, useState } from 'react';

type HomePageProps = {
  title?: string;
  content?: string;
};

const HomePage: React.FC<HomePageProps> = ({
  title = 'Welcome to Gurdwara Siri Guru Singh Sabha Mombasa,
  content = 'Discover our community and events.',
}) => {
  const images = [
    './assets'
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">{title}</h1>
        <p className="text-lg text-gray-100">{content}</p>
      </div>
    </div>
  );
};

export default HomePage;
