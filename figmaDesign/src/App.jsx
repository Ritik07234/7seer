import React from 'react';
import SidebarNavigation from './components/SidebarNavigation';
import ProfileSettings from './components/ProfileSettings';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <SidebarNavigation />
      </aside>
      <div className="main-content">
        <main className="profile-settings-container">
          <ProfileSettings />
        </main>
      </div>
    </div>
  );
}

export default App;
