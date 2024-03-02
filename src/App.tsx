import { useState } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './shared/HeaderComponent';
import SidebarComponent from './shared/SidebarComponent';

function App() {
  const [showHistory, setShowHistory] = useState(false);
  const [showTasks, setShowTasks] = useState(false);


  const handleHistoryClick = () => {
    setShowHistory(true);
    setShowTasks(false);

  }
  const handleShowTasks = () => {
    setShowTasks(true);
    setShowHistory(false);

  }
  return (
    <div className="App">
      <div>
        <header>
          <HeaderComponent />
        </header>
        <div className="body-section">
          <div className="sidebar-container">
            <SidebarComponent onHistoryClick={handleHistoryClick} onShowTaskClick={handleShowTasks} />
          </div>
          <div className="main-content">
            <HomeComponent showHistory={showHistory} showTasks={showTasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
