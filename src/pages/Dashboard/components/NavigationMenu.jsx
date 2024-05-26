// NavigationMenu.jsx
import React from 'react';
import './NavigationMenu.css';

const NavigationMenu = () => {
    return (
        <nav className="navigation-menu">
            <ul>
                <li>Home</li>
                <li>Your Work</li>
                <li>Discover</li>
                <li>Community</li>
                <li>Pro</li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
