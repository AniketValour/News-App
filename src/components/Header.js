import React from 'react';
import './Header.css'; // Import CSS for header styling

function Header({ toggleDarkMode }) {
    return (
        <header className="app-header d-flex justify-content-between align-items-center p-3">
            <h1 className="app-title">Simple News App</h1>
            <button className="dark-mode-toggle btn btn-outline-light" onClick={toggleDarkMode}>
                Toggle Dark Mode
            </button>
        </header>
    );
}

export default Header;
