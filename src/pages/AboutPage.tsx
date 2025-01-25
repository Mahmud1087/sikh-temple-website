import { useState, useEffect } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPage = () => {
  const images = [
    {
      src: "/images/name.jpg",
      alt: "Temple name",
      description: "Sign with temple name",
    },
    {
      src: "/images/fron.jpg",
      alt: "Front view of temple",
      description: "The front view of the temple",
    },
    {
      src: "/images/side1.jpg",
      alt: "Side view of temple",
      description:
        "Simran Darbar & Main Darbar (Outside) Langar Hall and Kitchen on Ground Floor",
    },
    {
      src: "/images/up1.jpg",
      alt: "Top view",
      description: "A top view of the temple grounds",
    },
  ];

  const testimonials = [
    {
      name: "Raj Singh",
      text: "The Gurdwara has been a second home for me and my family. The sense of community and support is unparalleled.",
    },
    {
      name: "Manpreet Kaur",
      text: "Attending the temple events has brought me closer to my roots and inspired me to give back to the community.",
    },
    {
      name: "Simranjit Singh",
      text: "The peaceful environment here allows me to connect spiritually and find inner peace.",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = images[0].src;
    img.onload = () => setLoading(false);

    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Rotate testimonials every 5 seconds

    return () => clearInterval(testimonialInterval);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="bg-gray-900 py-10">
      {/* Page Header */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center mb-10">
          <motion.h1
            className="text-3xl font-bold text-yellow-400 border-b-2 border-gray-400 w-fit pb-2 mb-6 sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-center text-gray-400 mb-6 sm:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Gurdwara! We are a community of Sikhs based in Mombasa,
            committed to service, compassion, and spiritual growth.
          </motion.p>
        </div>
      </MaxWidthWrapper>

      {/* History Section */}
      <MaxWidthWrapper>
        <motion.div
          className="space-y-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="text-2xl font-semibold text-gray-300">
            Our History
          </motion.h2>
          <p className="text-gray-400 sm:w-3/4">
            Established in the early 20th century, our Gurdwara has been a
            cornerstone of the Sikh community in Mombasa, providing a space for
            worship, community service, and cultural preservation.
          </p>
        </motion.div>
      </MaxWidthWrapper>

      {/* Collapsible Sections */}
      <MaxWidthWrapper>
        <div className="space-y-6 mb-10">
          {[
            {
              title: "Visitor Information",
              content:
                "We welcome visitors of all backgrounds. Our temple is open daily from [insert days and hours]. Please dress modestly and feel free to join us for Langar (community meal) after services.",
            },
            {
              title: "Future Plans",
              content:
                "We are excited to announce plans for [insert upcoming projects or events], aimed at further enriching our community and outreach efforts.",
            },
          ].map((section, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full text-left text-gray-300 text-lg font-medium flex justify-between items-center"
              >
                {section.title}
                <span className="text-yellow-400 text-xl">
                  {expandedSection === section.title ? "-" : "+"}
                </span>
              </button>
              {expandedSection === section.title && (
                <motion.div
                  className="mt-3 text-gray-400"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {section.content}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Community Voices (Testimonials) */}
      <MaxWidthWrapper>
        <motion.div
          className="space-y-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="text-2xl font-semibold text-gray-300">
            Community Voices
          </motion.h2>
          <div className="text-gray-400 sm:w-3/4 italic">
            "{testimonials[testimonialIndex].text}" -{" "}
            <span className="font-bold text-yellow-400">
              {testimonials[testimonialIndex].name}
            </span>
          </div>
        </motion.div>
      </MaxWidthWrapper>

      {/* Image Gallery */}
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
                tabIndex={0}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300"
                  loading="lazy"
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
          <h3 className="text-xl font-semibold text-gray-300 mb-4">
            Want to Know More?
          </h3>
          <p className="text-gray-400 mb-6">
            We welcome everyone to visit and join our events. Feel free to
            contact us for more information about services or community
            programs.
          </p>
          <Link
            to="/contact"
            className="text-yellow-400 hover:text-yellow-500 transform transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
