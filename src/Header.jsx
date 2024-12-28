import React from 'react';
import './App.css';

export function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="./assets/logo.png" alt="Tecdemy Logo" className="logo" />
        <span className="logo-text">TECDEMY</span>
      </div>
      
      <div className="search-container">
        <input
          type="search"
          placeholder="Search Courses Here..."
          className="search-input"
        />
      </div>

      <div className="nav-items">
        <button className="nav-button">
          <span className="icon">❤️</span>
          <span className="button-text">My Courses</span>
        </button>
        <button className="icon-button">
          <span className="icon">🛒</span>
        </button>
        <button className="icon-button">
          <span className="icon">🔔</span>
        </button>
        <button className="icon-button">
          <span className="icon">⚙️</span>
        </button>
        <button className="profile-button">
          <img src="/placeholder.svg?height=32&width=32" alt="User Avatar" className="avatar" />
          <div className="profile-info">
            <div className="profile-name">Yuvraj Solanki</div>
            <div className="profile-role">STUDENT</div>
          </div>
        </button>
      </div>
    </header>
  );
}

