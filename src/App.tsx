import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/profile/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
