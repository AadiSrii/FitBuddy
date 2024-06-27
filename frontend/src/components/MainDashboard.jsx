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
    const buttonStyle = {
      backgroundColor: '#ff4b5c', // Red-pink color
      border: 'none', // No border
      color: 'white', // White text
      padding: '10px 20px', // Some padding
      textAlign: 'center', // Centered text
      textDecoration: 'none', // No underline
      display: 'inline-block', // Inline-block element
      fontSize: '16px', // Increase font size
      margin: '4px 2px', // Some margin
      cursor: 'pointer', // Pointer/hand icon
      borderRadius: '12px', // Rounded corners
      transition: 'background-color 0.3s ease, transform 0.3s ease', 
      marginLeft: '49%',
    };
  
    const buttonHoverStyle = {
      backgroundColor: '#ff2a3d', // Darker red-pink color
      transform: 'scale(1.05)',
       
    };
  
    const buttonActiveStyle = {
      backgroundColor: '#e60029', // Even darker color when clicked
      transform: 'scale(0.95)', // Slightly shrink on click
    };
  
    const handleLogout = () => { localStorage.removeItem('fitbuddy'); }
    return (
      <div>
        {currentView === 'admin' && role === 'admin' ? (
          <SingleCardDashboard />
        ) : (
          <Dashboard />
        )}
        {role === 'admin' && (
         <button
         style={{
           backgroundColor: currentView === 'user' ? '#2ECC71' : '#3498DB', // Green or Blue based on view
           color: 'white',
           padding: '10px 20px',
           borderRadius: '5px',
           border: 'none',
           cursor: 'pointer',
           marginLeft: '45%',
           marginBottom: '20px',
           transition: '0.3s ease-in-out all', // Add a smooth transition effect
         }}
         onClick={toggleView}
       >
         Switch to {currentView === 'user' ? 'Admin' : 'User'} View
       </button>
        )}
        <br />
        <button
      onClick={handleLogout}
      style={buttonStyle}
      onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
      onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
      onMouseDown={(e) => Object.assign(e.target.style, buttonActiveStyle)}
      onMouseUp={(e) => Object.assign(e.target.style, buttonHoverStyle)}
    >
      Logout
    </button>
      </div>
    );
  };
  
  export default SwitchComponent;