import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';

const Profile = () => {
  const { contacts, handleImportContacts } = useContext(EventContext);
  const [contactsText, setContactsText] = useState('');

  const handleImport = () => {
    handleImportContacts(contactsText);
    setContactsText('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Your Profile</h2>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Import Contacts</h3>
        <textarea
          rows="5"
          placeholder="Paste contacts (Name, Email, Phone per line)"
          value={contactsText}
          onChange={e => setContactsText(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <button onClick={handleImport} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Import
        </button>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Your Contacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map(contact => (
            <div key={contact.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                {contact.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.email}</p>
                {contact.phone && <p className="text-xs text-gray-400">{contact.phone}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
