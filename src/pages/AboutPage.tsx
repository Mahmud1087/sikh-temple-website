import React from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-10">
      {/* Page Header */}
      <MaxWidthWrapper>
        <div className="text-center">
          <motion.h1 
            className="text-4xl font-bold text-orange-600 mb-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}>
            About Gurdwara Siri Guru Singh Sabha Mombasa
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-700 mb-6" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}>
            Welcome to our temple! We are a community of Sikhs based in Mombasa, committed to service, compassion, and spiritual growth.
          </motion.p>
        </div>
      </MaxWidthWrapper>

      {/* Mission and Vision */}
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-4">
            <motion.h2 
              className="text-2xl font-semibold text-gray-800" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }}>
              Our Mission
            </motion.h2>
            <p className="text-gray-700">
              Our mission is to serve the community through selfless service (seva), spiritual guidance, and promoting Sikh values of equality, love, and peace.
            </p>
          </div>
          <div className="space-y-4">
            <motion.h2 
              className="text-2xl font-semibold text-gray-800" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }}>
              Our Vision
            </motion.h2>
            <p className="text-gray-700">
              We aim to inspire and unite people of all backgrounds by providing a space for worship, community support, and charitable activities.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Image Gallery or Map Section */}
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="group">
            <img src="/src/assets/images/temple/inside1.jpg" alt="Inside of the temple" className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group">
            <img src="/src/assets/images/temple/ga.jpg" alt="Gurdwara grounds" className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group">
            <img src="/src/assets/images/temple/nigh.jpg" alt="Temple at night" className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Contact and Further Information */}
      <MaxWidthWrapper>
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Want to Know More?</h3>
          <p className="text-gray-700 mb-6">
            We welcome everyone to visit and join our events. Feel free to contact us for more information about services or community programs.
          </p>
          <Link to="/contact" className="text-orange-600 hover:text-orange-700">
            Contact Us
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
