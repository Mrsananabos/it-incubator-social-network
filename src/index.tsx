import React from 'react';
import './index.css';
import store, {StoreType} from "./redux/store";
import App from "./App";
import ReactDOM from 'react-dom';

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

