import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EventDetailsModal from './components/EventDetailsModal';
import EventForm from './components/EventForm';
import Calendar from './components/Calendar';
import { EventProvider } from './context/EventContext';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventForm, setShowEventForm] = useState(false);

  return (
    <EventProvider>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex-1 p-6">
          {currentPage === 'home' && <Calendar setShowEventForm={setShowEventForm} />}
          {currentPage === 'dashboard' && <Dashboard setSelectedEvent={setSelectedEvent} />}
          {currentPage === 'profile' && <Profile />}
        </div>

        {selectedEvent && <EventDetailsModal selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />}
        {showEventForm && <EventForm setShowEventForm={setShowEventForm} />}
      </div>
    </EventProvider>
  );
};

export default App;
