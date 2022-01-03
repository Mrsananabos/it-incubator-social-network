import {AuthType} from "../types/types";
import {ActionsTypes, setAuthUserData} from "../types/dispatchTypes";
import {AppDispatchType} from "./redux-store";
import {authAPI} from "../api/api";
import { stopSubmit } from "redux-form";

let initialState: AuthType = {
    data:
        {
            id: NaN,
            login: '',
            email: '',
        },
    isAuth: false,
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                data: {...action.data},
                isAuth: action.data.isAuth
            }
        default:
            return state
    }
}

export const getAuthUserDataTC = () => (dispatch: AppDispatchType) => {
    authAPI.getAuth()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}

export const loginTC = (login: string, password: string, rememberMe: boolean) => (dispatch: AppDispatchType) => {
    authAPI.login(login, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                // @ts-ignore
                dispatch(getAuthUserDataTC())
            } else {
                let action = stopSubmit('login', {_error: response.messages[0]});
                dispatch(action)
            }
        })
}

export const logoutTC = () => (dispatch: AppDispatchType) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(NaN, '', '',false))
            }
        })
}