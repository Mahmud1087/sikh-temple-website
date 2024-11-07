import { useState, useEffect } from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const images = [
    { src: 'public/images/inside1.jpg', alt: 'Inside of the temple', description: 'Darbar Sahib & Manji Sahib' },
    { src: 'public/images/ga.jpg', alt: 'Temple grounds', description: 'The serene temple grounds' },
    { src: 'public/images/nigh.jpg', alt: 'Temple at night', description: 'Temple illuminated at night' },
    { src: 'public/images/name.jpg', alt: 'Temple name', description: 'Sign with temple name' },
    { src: 'public/images/fron.jpg', alt: 'Front view of temple', description: 'The front view of the temple' },
    { src: 'public/images/side1.jpg', alt: 'Side view of temple', description: 'Simran Darbar & Main Darbar (Outside) Langar Hall and Kitchen on Ground Floor' },
    { src: 'public/images/up1.jpg', alt: 'Top view', description: 'A top view of the temple grounds' },
    { src: 'public/images/hallwa.jpg', alt: 'Hallway inside temple', description: 'A view inside the temple hallway' },
    // Add more images as necessary
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const img = new Image();
    img.src = images[0].src; // Preload the first image (or all if needed)
    img.onload = () => setLoading(false);
  },);

  return (
    <div className="bg-gray-900 py-10">
      <MaxWidthWrapper>
        <div className="text-center mb-10">
          <motion.h1
            className="text-4xl font-bold text-orange-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-6"
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
          <div className="loader text-center text-white">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                tabIndex={0} // Allow keyboard navigation
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300"
                  loading="lazy" // Lazy loading for improved performance
                />
                <p className="caption absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
