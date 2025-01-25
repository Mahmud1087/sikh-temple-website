import React, { useState } from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string; // Added imageUrl for event images
}

const EventsPage: React.FC = () => {
    // Define static events here (without using a form to add them)
    const staticEvents: Event[] = [
        {
            id: 1,
            title: 'Guru Gobind Singh Jayanti',
            date: '6th January 2025',
            description: 'Celebrating the birth of Guru Gobind Singh Ji.',
            imageUrl: 'https://via.placeholder.com/400x200?text=Guru+Gobind+Singh+Jayanti', // Placeholder image
        },
        {
            id: 2,
            title: 'Lohri',
            date: '13th January 2025',
            description: 'Celebrating the winter solstice.',
            imageUrl: 'https://via.placeholder.com/400x200?text=Lohri', // Placeholder image
        },
        {
            id: 3,
            title: 'Guru Harrai Jayanti',
            date: '10th February 2025',
            description: 'Celebrating the birth of Guru Harrai Ji.',
            imageUrl: 'https://via.placeholder.com/400x200?text=Guru+Harrai+Jayanti', // Placeholder image
        },
    ];

    // State for events (use the static array here instead of fetching)
    const [events] = useState<Event[]>(staticEvents);

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Upcoming Events</h1>
                
                {/* Event list */}
                {events.length === 0 ? (
                    <p className="text-lg text-gray-500 text-center">No events scheduled for this month.</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event) => (
                            <li key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                                <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-2xl font-semibold text-blue-500">{event.title}</h2>
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                    <p className="text-lg mt-2 text-gray-700">{event.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default EventsPage;