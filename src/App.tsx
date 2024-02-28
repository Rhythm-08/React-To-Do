import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './shared/HeaderComponent';
import SidebarComponent from './shared/SidebarComponent';

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <HeaderComponent />
        </header>
        <div className="body-section">
          <div className="sidebar-container">
          <SidebarComponent />
          </div>
          <div className="main-content">
            <HomeComponent></HomeComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
