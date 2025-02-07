import { useState, useEffect } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { motion } from "framer-motion";

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
    
  ];
  

  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Simulate image preloading
    const img = new Image();
    img.src = images[0].src;
    img.onload = () => setLoading(false);
  }, []);

  return (
    <div className="bg-gray-900 py-10 min-h-screen">
      {/* Header */}
      <MaxWidthWrapper>
        <div className="text-center mb-10 flex flex-col items-center">
          <motion.h1
            className="text-4xl font-bold text-yellow-400 border-b-2 border-gray-400 w-fit pb-2 mb-6 sm:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            📸 Gallery
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Explore the beautiful moments captured at Gurdwara Siri Guru Singh Sabha Mombasa.
          </motion.p>
        </div>
      </MaxWidthWrapper>

      {/* Image Gallery */}
      <MaxWidthWrapper>
        {loading ? (
          <div className="text-center text-white">Loading images...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300"
                  loading="lazy"
                />
                <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </MaxWidthWrapper>

      {/* Lightbox (Modal) for Fullscreen Image View */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;
