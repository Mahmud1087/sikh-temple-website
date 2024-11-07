import React, { useState, useEffect } from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const images = [
    //{ src: 'src/assets/images/temple/inside1.jpg', alt: 'Inside of the temple', description: 'Darbar Sahib & Manji Sahib' },
    //{ src: 'src/assets/images/temple/ga.jpg', alt: 'Temple grounds', description: 'The serene temple grounds' },
    //{ src: 'src/assets/images/temple/nigh.jpg', alt: 'Temple at night', description: 'Temple illuminated at night' },
    { src: '/src/assets/images/temple/name.jpg', alt: 'Temple name', description: 'Sign with temple name' },
    { src: '/src/assets/images/temple/fron.jpg', alt: 'Front view of temple', description: 'The front view of the temple' },
    { src: '/src/assets/images/temple/side1.jpg', alt: 'Side view of temple', description: 'Simran Darbar & Main Darbar (Outside) Langar Hall and Kitchen on Ground Floor' },
    { src: '/src/assets/images/temple/up1.jpg', alt: 'Top view', description: 'A top view of the temple grounds' },
    //{ src: '/src/assets/images/temple/hallwa.jpg', alt: 'Hallway inside temple', description: 'A view inside the temple hallway' },
    // Add more images as necessary
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload first image (you can extend to preload all images)
    const img = new Image();
    img.src = images[0].src;
    img.onload = () => setLoading(false);
  }, []);

  return (
    <div className="bg-gray-900 py-10">
      {/* Page Header */}
      <MaxWidthWrapper>
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold text-orange-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Gurdwara Siri Guru Singh Sabha Mombasa
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to our temple! We are a community of Sikhs based in Mombasa, committed to service, compassion, and spiritual growth.
          </motion.p>
        </div>
      </MaxWidthWrapper>

      {/* Mission and Vision */}
      <MaxWidthWrapper>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-4">
            <motion.h2
              className="text-2xl font-semibold text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our Mission
            </motion.h2>
            <p className="text-gray-400">
              Our mission is to serve the community through selfless service (seva), spiritual guidance, and promoting Sikh values of equality, love, and peace.
            </p>
          </div>
          <div className="space-y-4">
            <motion.h2
              className="text-2xl font-semibold text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our Vision
            </motion.h2>
            <p className="text-gray-400">
              We aim to inspire and unite people of all backgrounds by providing a space for worship, community support, and charitable activities.
            </p>
          </div>
        </motion.div>
      </MaxWidthWrapper>

      {/* Image Gallery or Map Section with hover effects */}
      <MaxWidthWrapper>
        {loading ? (
          <div className="loader text-center text-white">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                tabIndex="0" // Allow keyboard navigation
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300"
                  loading="lazy" // Lazy loading for performance
                />
                <p className="caption absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </MaxWidthWrapper>

      {/* Contact and Further Information */}
      <MaxWidthWrapper>
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Want to Know More?</h3>
          <p className="text-gray-400 mb-6">
            We welcome everyone to visit and join our events. Feel free to contact us for more information about services or community programs.
          </p>
          <Link to="/contact" className="text-orange-400 hover:text-orange-500">
            Contact Us
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
