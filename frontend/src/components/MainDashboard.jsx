import { useEffect, useState } from "react";
import SingleCardDashboard from "./adminDashboard";
import Dashboard from "./dashboardOne";

const SwitchComponent = () => {
    const [role, setRole] = useState('user');
   
    const [currentView, setCurrentView] = useState('user');
  
    useEffect(() => {
      const storedData = localStorage.getItem('fitbuddy');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData.role === 'admin') {
          setRole('admin');
        }
      }
    }, []);
  
    const toggleView = () => {
      if (role === 'admin') {
        setCurrentView(currentView === 'user' ? 'admin' : 'user');
      }
    };
  
    return (
      <div>
        {currentView === 'admin' && role === 'admin' ? (
          <SingleCardDashboard />
        ) : (
          <Dashboard />
        )}
        {role === 'admin' && (
          <button onClick={toggleView}>
            Switch to {currentView === 'user' ? 'Admin' : 'User'} View
          </button>
        )}
      </div>
    );
  };
  
  export default SwitchComponent;