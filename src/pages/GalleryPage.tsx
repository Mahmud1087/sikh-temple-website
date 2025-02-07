import { useState, useEffect } from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const images = [
    {
      src: '/images/newgateview.jpeg',
      alt: 'Temple entrance gate',
      description: 'A welcoming view of the main entrance gate.',
    },
    {
      src: '/images/newaltarcloseup.jpeg',
      alt: 'Close-up of the altar',
      description: 'A detailed close-up of the altar inside the temple.',
    },
    {
      src: '/images/newGurukalangar.jpeg',
      alt: 'Guru Ka Langar',
      description: 'The community kitchen serving meals to all visitors.',
    },
    {
      src: '/images/newdashmeshdabar.jpeg',
      alt: 'Dashmesh Darbar',
      description: 'A sacred space within the temple for spiritual gatherings.',
    },
    {
      src: '/images/newaltarfrontview.jpeg',
      alt: 'Front view of the altar',
      description: 'A serene front view of the beautifully decorated altar.',
    },
    {
      src: '/images/newtemplealtar.jpeg',
      alt: 'Temple Altar',
      description: 'A magnificent view of the temple’s main altar.',
    },
    {
      src: '/images/newtempleflag.jpeg',
      alt: 'Temple Flag',
      description: 'The Nishan Sahib, proudly hoisted at the temple.',
    },
    {
      src: '/images/newtemplegatehead.jpeg',
      alt: 'Temple Gate Head',
      description: 'The main gate’s decorative headpiece with Sikh symbols.',
    },
    {
      src: '/images/newtemplehallway.jpeg',
      alt: 'Temple hallway',
      description: 'A view of the temple’s peaceful hallway.',
    },
    {
      src: '/images/newtemplenightview.jpeg',
      alt: 'Temple at night',
      description: 'A breathtaking view of the temple illuminated at night.',
    },
    {
      src: '/images/newtempleparking.jpeg',
      alt: 'Temple parking area',
      description: 'The spacious parking area outside the temple.',
    },
    {
      src: '/images/Newtemplesideview.jpeg',
      alt: 'Side view of the temple',
      description: 'A grand side perspective of the temple’s architecture.',
    },
    {
      src: '/images/night3.jpeg',
      alt: 'Temple night lights',
      description: 'Temple surroundings beautifully lit at night.',
    },
    {
      src: '/images/side1.jpg',
      alt: 'Side angle of the temple',
      description: 'A distinct side view of the temple’s design.',
    },
    {
      src: '/images/up1.jpg',
      alt: 'Aerial view of the temple',
      description: 'A high-angle view capturing the temple’s layout.',
    },
  ];
  

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const img = new Image();
    img.src = images[0].src; // Preload the first image (or all if needed)
    img.onload = () => setLoading(false);
  });

  return (
    <div className='bg-gray-900 py-10'>
      <MaxWidthWrapper>
        <div className='text-center mb-10 flex flex-col items-center'>
          <motion.h1
            className='text-3xl font-bold text-yellow-400 border-b-2 border-gray-400 w-fit pb-2 mb-6 sm:text-4xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>
          <motion.p
            className='text-lg text-gray-300 mb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Explore the beautiful moments captured at Gurdwara Siri Guru Singh
            Sabha Mombasa.
          </motion.p>
        </div>
      </MaxWidthWrapper>

      {/* Image Gallery */}
      <MaxWidthWrapper>
        {loading ? (
          <div className='loader text-center text-white'>Loading...</div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className='group relative'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                tabIndex={0} // Allow keyboard navigation
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300'
                  loading='lazy' // Lazy loading for improved performance
                />
                <p className='caption absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {image.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default GalleryPage;
