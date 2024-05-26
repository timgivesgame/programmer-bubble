import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [showSignUp, setShowSignUp] = useState(false);

  // const handleGetStartedClick = () => {
  //   setShowSignUp(true);
  // };

  return (
    // <div className="container">
    //   {showSignUp ? <SignUp /> : <Home onGetStartedClick={handleGetStartedClick} />}
    // </div>
    <Router basename="/programmer-bubble">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
</Router>
  );
}

export default App;
