import React, { useState } from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
}

const AddEventForm: React.FC<{ onAddEvent: (event: Event) => void }> = ({ onAddEvent }) => {
    // Local state to store form inputs
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEvent: Event = {
            id: Date.now(), // Use current timestamp as unique ID
            title,
            date,
            description,
        };
        // Trigger parent callback to add event
        onAddEvent(newEvent);
        // Reset form fields
        setTitle('');
        setDate('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Add Event</h2>
            
            {/* Title input */}
            <div className="mb-4">
                <label htmlFor="title" className="block text-lg font-medium text-gray-700">Event Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Enter event title"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Date input */}
            <div className="mb-4">
                <label htmlFor="date" className="block text-lg font-medium text-gray-700">Event Date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Description input */}
            <div className="mb-4">
                <label htmlFor="description" className="block text-lg font-medium text-gray-700">Event Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Enter event description"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Add Event
            </button>
        </form>
    );
};

export default AddEventForm;
