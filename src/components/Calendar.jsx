
import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';

const Calendar = ({ setShowEventForm }) => {
  const { events } = useContext(EventContext);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Calendar</h2>
        <button onClick={() => setShowEventForm(true)} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          + Add Event
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
          <div key={day} className="border p-2 rounded-lg h-20 flex flex-col justify-start">
            <span className="text-sm font-semibold">{day}</span>
            {events.filter(e => new Date(e.date).getDate() === day).map(ev => (
              <span key={ev.id} className="text-xs mt-1 bg-purple-200 text-purple-800 rounded px-1">{ev.title}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
