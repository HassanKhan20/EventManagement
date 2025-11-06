import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [rsvps, setRsvps] = useState({});

  const handleRSVP = (eventId, contactId) => {
    setRsvps(prev => {
      const eventRsvps = prev[eventId] || [];
      if (eventRsvps.includes(contactId)) {
        return { ...prev, [eventId]: eventRsvps.filter(id => id !== contactId) };
      } else {
        return { ...prev, [eventId]: [...eventRsvps, contactId] };
      }
    });
  };

  const handleImportContacts = (newContactsText) => {
    const lines = newContactsText.split('\n').filter(line => line.trim());
    const importedContacts = lines.map((line, idx) => {
      const parts = line.split(',').map(p => p.trim());
      return {
        id: contacts.length + idx + 1,
        name: parts[0] || 'Unknown',
        email: parts[1] || '',
        phone: parts[2] || ''
      };
    });
    setContacts([...contacts, ...importedContacts]);
  };

  return (
    <EventContext.Provider value={{ events, setEvents, contacts, setContacts, rsvps, handleRSVP, handleImportContacts }}>
      {children}
    </EventContext.Provider>
  );
};
