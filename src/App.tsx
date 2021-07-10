import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Dialogs from "./components/profile/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from './components/profile/Profile';
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    debugger
    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs
                            messages={state.dialogsPage.messages}
                            dialogs={state.dialogsPage.dialogs}/>}/>
                    <Route path={'/profile'} render={() =>
                        <Profile profilePageProps={state.profilePage}
                                 addNewPost={props.store.addNewPost.bind(props.store)}
                                 updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
