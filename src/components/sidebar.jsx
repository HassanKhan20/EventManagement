import React from 'react';
import { Home, Calendar, User, Settings, LogOut, X } from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen, currentPage, setCurrentPage }) => (
  <div className={`fixed inset-y-0 left-0 w-64 transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 bg-gradient-to-b from-purple-900 to-indigo-900 text-white`}>
    <div className="flex items-center justify-between p-6 border-b border-purple-700">
      <h1 className="text-2xl font-bold">EventHub</h1>
      <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
        <X size={24} />
      </button>
    </div>
    <nav className="p-4 space-y-2">
      <SidebarButton icon={<Home size={20}/>} label="Home" active={currentPage === 'home'} onClick={() => setCurrentPage('home')} />
      <SidebarButton icon={<Calendar size={20}/>} label="Browse Events" active={currentPage === 'dashboard'} onClick={() => setCurrentPage('dashboard')} />
      <SidebarButton icon={<User size={20}/>} label="Profile" active={currentPage === 'profile'} onClick={() => setCurrentPage('profile')} />
      <SidebarButton icon={<Settings size={20}/>} label="Settings" active={currentPage === 'settings'} onClick={() => setCurrentPage('settings')} />
    </nav>
    <div className="absolute bottom-0 w-full p-4 border-t border-purple-700">
      <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  </div>
);

const SidebarButton = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${active ? 'bg-purple-700 text-white' : 'text-purple-200 hover:bg-purple-800'}`}>
    {icon} <span>{label}</span>
  </button>
);

export default Sidebar;
