import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing icons

const SikhYouthOfMombasa: React.FC = () => {
  // Motion variants for animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50">
      {/* Header */}
      <motion.h1
        className="text-4xl font-extrabold text-blue-700 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Sikh Youth of Mombasa
      </motion.h1>

      {/* Who We Are */}
      <motion.section className="mb-10" variants={sectionVariants} initial="hidden" animate="visible">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
  <div className="flex flex-col md:flex-row items-center gap-6">
    <img
      src="/images/styouthlogo.jpg"
      alt="Sikh Youth Group"
      className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full shadow-md border-4 border-gray-300"
    />
    <p className="text-lg text-gray-700 text-center md:text-left">
      Sikh Youth of Mombasa is a community-driven group dedicated to uniting the Sikh youth. Founded in July 2016,
      our mission is to create a strong, connected, and active youth community that upholds Sikh values while making
      a positive impact in society.
    </p>
  </div>
</motion.section>


      {/* Our Vision */}
      <motion.section className="mb-10" variants={sectionVariants} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700">
          We strive to bring Sikh youth together, fostering unity, spiritual growth, and selfless service. We aim to
          strengthen our bond with one another and contribute meaningfully to those around us.
        </p>
      </motion.section>

      {/* What We Do */}
      <motion.section className="mb-10" variants={sectionVariants} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">What We Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Naam Japna */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/images/stsong youth.jpeg"
              alt="Kirtan"
              className="w-full h-50 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">Naam Japna (ਨਾਮ ਜਪਣਾ)</h3>
            <p className="text-lg text-gray-700 mt-2">
              Faith is at the heart of everything we do. Through kirtan and learning Gurmukhi, we deepen our understanding
              of Sikh teachings and spiritual heritage.
            </p>
          </div>

          {/* Kirat Karna */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/images/styouth.jpeg"
              alt="Hard Work"
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">Kirat Karna (ਕਿਰਤ ਕਰਨਾ)</h3>
            <p className="text-lg text-gray-700 mt-2">
              We strive to develop discipline, leadership, and responsibility, balancing our studies, careers, and personal
              growth while staying true to Sikh values.
            </p>
          </div>

          {/* Vand Chakna */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/images/styouthdonations.jpeg"
              alt="Seva"
              className="w-full h-50 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">Vand Chakna (ਵੰਡ ਛਕਣਾ)</h3>
            <p className="text-lg text-gray-700 mt-2">
              Seva (selfless service) is key to Sikhism. Through charity events and food drives, we serve the community and
              help those in need.
            </p>
          </div>

          {/* Sports & Team Spirit */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/images/styouth golf.jpeg"
              alt="Sports"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">Sports & Team Spirit</h3>
            <p className="text-lg text-gray-700 mt-2">
              A strong body builds a strong mind. We organize football and volleyball training to promote fitness and
              teamwork.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Join Us */}
      <motion.section className="mb-10 text-center" variants={sectionVariants} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
        <p className="text-lg text-gray-700">
          Want to connect with fellow Sikh youth? Grow spiritually, stay active in sports, and serve the community? There's
          a place for you here.
        </p>
        
        <a
          href="https://www.facebook.com/share/1E1M1qQw7N/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Get Involved
        </a>
      </motion.section>

      {/* Follow Us */}
      <motion.section className="text-center mb-10" variants={sectionVariants} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Follow Us</h2>
        <p className="text-lg text-gray-700 mb-4">Stay updated with our events and initiatives.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/share/1E1M1qQw7N/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl hover:text-blue-700"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-3xl hover:text-pink-700"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-3xl hover:text-blue-600"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default SikhYouthOfMombasa;
