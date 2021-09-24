import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer
})

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export type StoreType = typeof store;

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store
