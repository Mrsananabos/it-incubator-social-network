import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Dialogs from "./components/profile/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from './components/profile/Profile';
import {StoreType} from "./redux/redux-store";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs dialogsPage={state.dialogsReducer}
                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path={'/profile'} render={() =>
                        <Profile profilePageProps={state.profileReducer}
                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
