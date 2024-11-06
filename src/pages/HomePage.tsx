import React, { useEffect, useState } from 'react';

type HomePageProps = {
  title?: string;
  content?: string;
};

const HomePage: React.FC<HomePageProps> = ({
  title = 'Welcome to Gurdwara Siri Guru Singh Sabha Mombasa',
  content = 'Discover our community and events.',
}) => {
  const images = [
    '/src/assets/images/temple/name.jpg',
    '/src/assets/images/temple/fron.jpg',
    '/src/assets/images/temple/ga.jpg',
    '/src/assets/images/temple/inside1.jpg',
    '/src/assets/images/temple/side1.jpg',
    '/src/assets/images/temple/up1.jpg',
    '/src/assets/images/temple/in1.jpg',
    '/src/assets/images/temple/hallwa.jpg',
    '/src/assets/images/temple/nigh.jpg',
    '/src/assets/images/temple/nigh2.jpg',
    '/src/assets/images/temple/al1.jpg',
    '/src/assets/images/temple/al2.jpg',
    '/src/assets/images/temple/al3.jpg',
    
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic slideshow with pause on manual control
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length, isPaused]);

  // Manually go to the previous or next image
  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    setIsPaused(true); // Pause the slideshow temporarily
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setIsPaused(true); // Pause the slideshow temporarily
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
      aria-label="Slideshow of the Sikh Temple"
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">{title}</h1>
        <p className="text-lg text-gray-100">{content}</p>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-8 flex space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
