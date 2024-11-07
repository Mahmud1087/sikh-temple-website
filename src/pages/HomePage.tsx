import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigating to the About page

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
  const navigate = useNavigate(); // To handle navigation
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  // Automatic slideshow with pause on manual control
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length, isPaused]);

  // Manually go to the previous or next image
  const handlePrev = React.useCallback(() => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    setIsPaused(true); // Pause the slideshow temporarily
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  }, [images.length]);

  const handleNext = React.useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setIsPaused(true); // Pause the slideshow temporarily
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
        setIsKeyboardNavigation(true); // Enable keyboard navigation
      } else if (event.key === 'ArrowRight') {
        handleNext();
        setIsKeyboardNavigation(true); // Enable keyboard navigation
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrev, handleNext]);

  // Navigate to the About page when buttons are clicked (during keyboard navigation)
  const navigateToAboutPage = () => {
    navigate('/about');
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
        {!isKeyboardNavigation ? (
          <>
            <button
            onClick={navigateToAboutPage}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none"
            aria-label="Go to About Page"
          >
            Go to About Page
          </button>
          </>
        ) : (
          // Display link to the About page after keyboard navigation
          <button
            onClick={navigateToAboutPage}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none"
            aria-label="Go to About Page"
          >
            Go to About Page
          </button>
        )}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 w-2 rounded-full ${currentImage === index ? 'bg-orange-600' : 'bg-gray-300'} focus:outline-none`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
