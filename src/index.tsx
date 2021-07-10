import React from 'react';
import './index.css';
import App from "./App";
import ReactDOM from 'react-dom';
import store, {StoreType} from "./redux/redux-store";

export let renderEntireTree = (props: StoreType) => {
    return ReactDOM.render(
        <React.StrictMode>
            <App store={props}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store);

store.subscribe(() => renderEntireTree(store))

