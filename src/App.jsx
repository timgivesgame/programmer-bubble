import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import SignUp from './pages/SignUp';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleGetStartedClick = () => {
    setShowSignUp(true);
  };

  return (
    <div className="container">
      {showSignUp ? <SignUp /> : <Home onGetStartedClick={handleGetStartedClick} />}
    </div>
  );
}

export default App;
