import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { X } from 'lucide-react';

const EventForm = ({ setShowEventForm }) => {
  const { events, setEvents } = useContext(EventContext);
  const [form, setForm] = useState({
    title: '',
    category: '',
    date: '',
    time: '',
    location: '',
    description: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const newEvent = { id: events.length + 1, ...form };
    setEvents([...events, newEvent]);
    setShowEventForm(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg relative">
        <button onClick={() => setShowEventForm(false)} className="absolute top-4 right-4">
          <X size={24} className="text-gray-700 dark:text-gray-200"/>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Create Event</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="w-full p-3 border rounded-lg"/>
          <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} className="w-full p-3 border rounded-lg"/>
          <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full p-3 border rounded-lg"/>
          <input type="time" name="time" value={form.time} onChange={handleChange} className="w-full p-3 border rounded-lg"/>
          <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} className="w-full p-3 border rounded-lg"/>
          <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-3 border rounded-lg"/>
          <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
