import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
