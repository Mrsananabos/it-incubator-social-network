import {UsersPageDataType} from "../types/types";
import {ActionsTypes} from "../types/dispatchTypes";

const initialState: UsersPageDataType = {
    items: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state: UsersPageDataType = initialState, action: ActionsTypes): UsersPageDataType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state,
                items: [...action.items]
            }
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.count}
        case "SET-CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-FOLLOWING-IN-PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        case "FOLLOW":
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        default:
            return state;
    }
}

export default usersReducer
