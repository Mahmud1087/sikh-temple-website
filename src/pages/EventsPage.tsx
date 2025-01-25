import React, { useState } from "react";
import { motion } from "framer-motion";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string; // Event image URL
}

const EventsPage: React.FC = () => {
  // Define static events
  const staticEvents: Event[] = [
    {
      id: 1,
      title: "Guru Gobind Singh Jayanti",
      date: "6th January 2025",
      description: "Celebrating the birth of Guru Gobind Singh Ji.",
      imageUrl:
        "https://via.placeholder.com/400x200?text=Guru+Gobind+Singh+Jayanti",
    },
    {
      id: 2,
      title: "Lohri",
      date: "13th January 2025",
      description: "Celebrating the winter solstice.",
      imageUrl: "https://via.placeholder.com/400x200?text=Lohri",
    },
    {
      id: 3,
      title: "Guru Harrai Jayanti",
      date: "10th February 2025",
      description: "Celebrating the birth of Guru Harrai Ji.",
      imageUrl:
        "https://via.placeholder.com/400x200?text=Guru+Harrai+Jayanti",
    },
  ];

  // Use static events in state
  const [events] = useState<Event[]>(staticEvents);

  // Framer Motion animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Upcoming Events
        </h1>

        {/* Event List */}
        {events.length === 0 ? (
          <p className="text-lg text-gray-500 text-center">
            No events scheduled for this month.
          </p>
        ) : (
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {events.map((event) => (
              <motion.li
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                variants={cardVariants}
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-blue-500">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <p className="text-lg mt-2 text-gray-700">
                    {event.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
