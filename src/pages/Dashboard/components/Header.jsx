// Header.jsx
import React from 'react';
import './Header.css';

const Header = ({ username }) => {
    return (
        <header className="dashboard-header">
            <h1>Welcome back, {username}!</h1>
            <div className="profile-section">
                <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
                {/* <div className="bio">
                    <p>Quick Bio</p>
                    <button>Edit</button>
                </div> */}
                <div className="notifications">
                    <span className="notification-icon">🔔</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
