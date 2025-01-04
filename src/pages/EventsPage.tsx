import React, { useState, useEffect } from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
}

const EventsPage: React.FC = () => {
    // Define static events here (without using a form to add them)
    const staticEvents: Event[] = [
        {
            id: 1,
            title: 'Event One',
            date: '2025-02-14',
            description: 'This is the description for Event One.',
        },
        {
            id: 2,
            title: 'Event Two',
            date: '2025-03-01',
            description: 'Description of the second event.',
        },
        {
            id: 3,
            title: 'Event Three',
            date: '2025-04-10',
            description: 'A fun event to look forward to!',
        },
    ];

    // State for events (use the static array here instead of fetching)
    const [events, setEvents] = useState<Event[]>(staticEvents);

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-blue-600 mb-6">Upcoming Events</h1>
                
                {/* Event list */}
                {events.length === 0 ? (
                    <p className="text-lg text-gray-500">No events scheduled for this month.</p>
                ) : (
                    <ul className="space-y-4">
                        {events.map((event) => (
                            <li key={event.id} className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-blue-500">{event.title}</h2>
                                <p className="text-sm text-gray-500">{event.date}</p>
                                <p className="text-lg mt-2 text-gray-700">{event.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default EventsPage;
