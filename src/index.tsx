import React from 'react';
import './index.css';
import App from "./App";
import ReactDOM from 'react-dom';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

export let renderEntireTree = () => {
    return ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}
renderEntireTree();

store.subscribe(() => renderEntireTree())

