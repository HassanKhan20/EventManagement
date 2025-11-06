import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { X } from 'lucide-react';

const EventDetailsModal = ({ selectedEvent, setSelectedEvent }) => {
  const { contacts, rsvps, handleRSVP } = useContext(EventContext);
  const eventRsvps = rsvps[selectedEvent.id] || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg relative">
        <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4">
          <X size={24} className="text-gray-700 dark:text-gray-200"/>
        </button>
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{selectedEvent.title}</h2>
        <p className="text-gray-500 dark:text-gray-300">{selectedEvent.category}</p>
        <p className="mt-1 text-gray-700 dark:text-gray-200">{selectedEvent.date} at {selectedEvent.time}</p>
        <p className="mt-1 text-gray-700 dark:text-gray-200">{selectedEvent.location}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{selectedEvent.description}</p>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">RSVP</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {contacts.map(contact => (
              <button
                key={contact.id}
                onClick={() => handleRSVP(selectedEvent.id, contact.id)}
                className={`px-3 py-1 rounded-lg border ${eventRsvps.includes(contact.id) ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
              >
                {contact.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
