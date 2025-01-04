import React, { useState, useEffect } from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
}

const EventsPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        // Fetch events from an API or database
        const fetchEvents = async () => {
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data);
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Upcoming Events</h1>
            {events.length === 0 ? (
                <p>No events scheduled for this month.</p>
            ) : (
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <h2>{event.title}</h2>
                            <p>{event.date}</p>
                            <p>{event.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventsPage;