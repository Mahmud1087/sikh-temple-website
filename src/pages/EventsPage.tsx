import React, { useState } from "react";
import { motion } from "framer-motion";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const EventsPage: React.FC = () => {
  // Static events
  const staticEvents: Event[] = [
    {
      id: 1,
      title: "Guru Gobind Singh Jayanti",
      date: "2025-01-06",
      description: "Celebrating the birth of Guru Gobind Singh Ji.",
      imageUrl:
        "https://via.placeholder.com/400x200?text=Guru+Gobind+Singh+Jayanti",
    },
    {
      id: 2,
      title: "Lohri",
      date: "2025-01-13",
      description: "Celebrating the winter solstice.",
      imageUrl: "https://via.placeholder.com/400x200?text=Lohri",
    },
    {
      id: 3,
      title: "Guru Harrai Jayanti",
      date: "2025-02-10",
      description: "Celebrating the birth of Guru Harrai Ji.",
      imageUrl:
        "https://via.placeholder.com/400x200?text=Guru+Harrai+Jayanti",
    },
  ];

  const [events, setEvents] = useState<Event[]>(staticEvents);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterDate, setFilterDate] = useState<string>("");
  const [newEvent, setNewEvent] = useState<Event>({
    id: 0,
    title: "",
    date: "",
    description: "",
    imageUrl: "",
  });

  // Add a new event
  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.description) {
      setEvents((prevEvents) => [
        ...prevEvents,
        { ...newEvent, id: prevEvents.length + 1 },
      ]);
      setNewEvent({ id: 0, title: "", date: "", description: "", imageUrl: "" });
    }
  };

  // Filter and search events
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDate = filterDate ? event.date === filterDate : true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Upcoming Events
        </h1>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Event List */}
        {filteredEvents.length === 0 ? (
          <p className="text-lg text-gray-500 text-center">
            No events match your criteria.
          </p>
        ) : (
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {filteredEvents.map((event) => (
              <motion.li
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <img
                  src={event.imageUrl || "https://via.placeholder.com/400x200"}
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

        {/* Add Event Form */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Add a New Event
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, title: e.target.value }))
              }
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, date: e.target.value }))
              }
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Event Description"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, description: e.target.value }))
              }
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-2"
            />
            <input
              type="text"
              placeholder="Image URL (optional)"
              value={newEvent.imageUrl}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, imageUrl: e.target.value }))
              }
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-2"
            />
          </div>
          <button
            onClick={handleAddEvent}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
