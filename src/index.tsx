import React from 'react';
import './index.css';
import store, {StoreType} from "./redux/state";
import App from "./App";
import ReactDOM from 'react-dom';

export let renderEntireTree = (props: StoreType) => {
    debugger
    return ReactDOM.render(
        <React.StrictMode>
            <App store={props}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store);

store.subscribe(() => renderEntireTree(store))

