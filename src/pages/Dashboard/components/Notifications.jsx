// Notifications.jsx
import React from 'react';
import './Notifications.css';

const Notifications = () => {
    return (
        <section className="notifications">
            <h2>Notifications</h2>
            <div className="messages">
                <h3>Messages</h3>
                <p>Check out new messages or replies.</p>
            </div>
            <div className="updates">
                <h3>Updates</h3>
                <p>Important announcements or site updates.</p>
            </div>
        </section>
    );
};

export default Notifications;
