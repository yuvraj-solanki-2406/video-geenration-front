import React from 'react';
import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { HomePage } from './HomePage';
import { Login } from './Login';
import './App.css';

function App() {
  const [userData, setuserData] = useState("")
  const userInfo = () => {
    token = localStorage.get("token")
    setuserData(token)
  }

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="main-content">
        {/* <Login /> */}
        <HomePage />
      </main>
    </div>
  );
}

export default App;

