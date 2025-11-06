import React from 'react';

const EventCard = ({ event, onClick }) => (
  <div onClick={onClick} className="cursor-pointer p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
    <p className="text-gray-500">{event.category}</p>
    <p className="text-gray-600 mt-2">{event.date} at {event.time}</p>
    <p className="text-gray-700 mt-1">{event.location}</p>
  </div>
);

export default EventCard;
