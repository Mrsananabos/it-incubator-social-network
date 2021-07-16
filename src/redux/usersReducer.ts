import {UsersPageDataType} from "../types/types";
import {ActionsTypes} from "../types/dispatchTypes";

const initialState: UsersPageDataType = {
    items: []
}

const usersReducer = (state: UsersPageDataType = initialState, action: ActionsTypes): UsersPageDataType => {
    switch (action.type) {
        case "SET-USERS":
            debugger
            return {
                ...state,
                items: [...action.items]
            }
        default:
            return state;
    }
}

export default usersReducer
