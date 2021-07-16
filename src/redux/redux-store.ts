import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer
})

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export type StoreType = typeof store;

let store = createStore(reducers);

export default store
