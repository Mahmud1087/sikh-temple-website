import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigating to the About page

type HomePageProps = {
  title?: string;
  content?: string;
};

const HomePage: React.FC<HomePageProps> = ({
  title = 'Gurdwara Siri Guru Singh Sabha Mombasa',
  content = 'Discover our community and events.',
}) => {
  const images = [
    '/images/newgateview.jpeg',
    '/images/newaltarcloseup.jpeg',
    '/images/newGurukalangar.jpeg',
    '/images/newdashmeshdabar.jpeg',
    '/images/newaltarfrontview.jpeg',
    '/images/newtemplealtar.jpeg',
    '/images/newtempleflag.jpeg',
    '/images/newtemplegatehead.jpeg',
    '/images/newtemplehallway.jpeg',
    '/images/newtemplenightview.jpeg',
    '/images/newtempleparking.jpeg',
    '/images/Newtemplesideview.jpeg',
    '/images/night3.jpeg',
    '/images/side1.jpg',
    '/images/up1.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate(); // To handle navigation

  // Automatic slideshow with pause on manual control
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 9000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length, isPaused]);

  // Manually go to the previous or next image
  const handlePrev = React.useCallback(() => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
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
      switch (event.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        default:
          break;
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
      className='relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center transition-all duration-700 ease-in-out px-4'
      style={{ backgroundImage: `url(${images[currentImage]})` }}
      aria-label='Slideshow of the Sikh Temple'
    >
      <div className='bg-black bg-opacity-50 py-8 rounded-lg text-center sm:p-8'>
        <span className='text-white font-semibold text-xl'>Welcome to</span>
        <h1 className='text-3xl font-bold text-yellow-500 mb-4 sm:text-4xl'>
          {title}
        </h1>
        <p className='text-lg text-gray-100 mb-4'>{content}</p>

        {/* Controls and buttons */}
        <div className='flex flex-col items-center space-y-4'>
          <button
            onClick={navigateToAboutPage}
            className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none'
            aria-label='Go to About Page'
          >
            Discover
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className='absolute bottom-4 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 w-2 rounded-full ${
              currentImage === index ? 'bg-yellow-500' : 'bg-gray-300'
            } focus:outline-none`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
