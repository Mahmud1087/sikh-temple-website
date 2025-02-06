import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const EventsPage: React.FC = () => {
  // Check if secretary is logged in
  const [isSecretary, setIsSecretary] = useState<boolean>(() => {
    return localStorage.getItem("isSecretary") === "true";
  });

  // Load events from local storage
  const [events, setEvents] = useState<Event[]>(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterDate, setFilterDate] = useState<string>("");

  // New event form state
  const [newEvent, setNewEvent] = useState<Event>({
    id: Date.now(),
    title: "",
    date: "",
    description: "",
    imageUrl: "",
  });

  // Save events to local storage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Function to add a new event (only if secretary)
  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.description) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!isSecretary) {
      alert("Unauthorized! Only the secretary can add events.");
      return;
    }

    setEvents((prevEvents) => [...prevEvents, { ...newEvent, id: Date.now() }]);
    setNewEvent({ id: Date.now(), title: "", date: "", description: "", imageUrl: "" });
  };

  // Function to delete an event (only if secretary)
  const handleDeleteEvent = (id: number) => {
    if (!isSecretary) {
      alert("Unauthorized! Only the secretary can delete events.");
      return;
    }
    setEvents(events.filter((event) => event.id !== id));
  };

  // Login function
  const handleLogin = () => {
    const password = prompt("Enter Secretary Password:");
    if (password === "securepassword123") { // Change this to a stronger one!
      localStorage.setItem("isSecretary", "true");
      setIsSecretary(true);
    } else {
      alert("Incorrect password!");
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isSecretary");
    setIsSecretary(false);
  };

  // Filter events
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = filterDate ? event.date === filterDate : true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          📅 Siri Guru Singh Sabha Weekly Programme
        </h1>

        {/* Login & Logout Buttons */}
        {!isSecretary ? (
          <button onClick={handleLogin} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            LOGIN
          </button>
        ) : (
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Logout
          </button>
        )}

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-4">
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
          <p className="text-lg text-gray-500 text-center">No events match your criteria.</p>
        ) : (
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
                  <h2 className="text-2xl font-semibold text-blue-500">{event.title}</h2>
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <p className="text-lg mt-2 text-gray-700">{event.description}</p>
                  
                  {isSecretary && (
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="mt-2 text-sm text-red-500 hover:underline"
                    >
                      Delete Event
                    </button>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Add Event Form - Only for Secretary */}
        {isSecretary && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Add a New Event</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Event Description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-2"
              />
            </div>
            <button onClick={handleAddEvent} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add Event
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
