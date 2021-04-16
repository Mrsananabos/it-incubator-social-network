import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Dialogs from "./components/profile/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from './components/profile/Profile';

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
