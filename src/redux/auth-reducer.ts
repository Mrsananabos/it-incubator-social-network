import {AuthType} from "../types/types";
import {ActionsTypes} from "../types/dispatchTypes";

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
                isAuth: true
            }
        default:
            return state
    }
}
