import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Dialogs from "./components/profile/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from './components/profile/Profile';
import {StateType} from "./redux/state";

export type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        messages={props.state.dialogsPage.messages}
                        dialogs={props.state.dialogsPage.dialogs}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}
                                                                    addPost={props.state.profilePage.addPost}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
