import {UsersPageDataType} from "../types/types";
import {ActionsTypes} from "../types/dispatchTypes";

const initialState: UsersPageDataType = {
    items: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state: UsersPageDataType = initialState, action: ActionsTypes): UsersPageDataType => {
    switch (action.type) {
        case "SET-USERS":
            debugger
            return {
                ...state,
                items: [...action.items]
            }
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.count}
        case "SET-CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-FETCHING":
            debugger
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export default usersReducer
