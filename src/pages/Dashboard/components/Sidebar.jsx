// Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="quick-actions">
                <button>Continue Course</button>
                <button>New Project</button>
                <button>Join Discussion</button>
                <button>Upgrade to Pro</button>
            </div>
            <div className="app-categories">
                <h3>App Categories</h3>
                <ul>
                    <li>Courses</li>
                    <li>Projects</li>
                    <li>Discussions</li>
                    <li>Community</li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
