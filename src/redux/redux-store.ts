import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer
})
export type StoreType = typeof store;

let store = createStore(reducers);

export default store
