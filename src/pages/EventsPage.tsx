import React, { useState, useEffect } from 'react';
import AddEventForm from '../components/AddEventForm';

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
}

const EventsPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data);
        };

        fetchEvents();
    }, []);

    const addEvent = (event: Event) => {
        setEvents([...events, event]);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-blue-600 mb-6">Upcoming Events</h1>
                <AddEventForm onAddEvent={addEvent} />
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
