import {UsersPageDataType} from "../types/types";
import {
    ActionsTypes,
    follow,
    setCurrentPage,
    setFetching,
    setFollowingInProgress,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../types/dispatchTypes";
import {AppDispatchType} from "./redux-store";
import {usersAPI} from "../api/api";

const initialState: UsersPageDataType = {
    items: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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

export const getUsersThunkCreater = (currentPage: number, pageSize: number) => {
    return (dispatch: AppDispatchType) => {
        dispatch(setFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setFetching(false))
                dispatch(setUsers(response.items))
                dispatch(setTotalUsersCount(response.totalCount))
            })
    }
}

export const pageChangerThunkCreator = (currentPage: number, pageSize: number) => (dispatch: AppDispatchType) => {
    dispatch(setFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setFetching(false))
        });
}

export const followUserThunkCreator = (userId: number) => (dispatch: AppDispatchType) => {
    dispatch(setFollowingInProgress(true, userId))
    usersAPI.followUser(userId)
        .then(response => {
            if (response === 0) {
                dispatch(follow(userId))
            }
            dispatch(setFollowingInProgress(false, userId))
        })
}
export const unfollowUserThunkCreator = (userId: number) => (dispatch: AppDispatchType) => {
    dispatch(setFollowingInProgress(true, userId))
    usersAPI.unfollowUser(userId)
        .then(response => {
            if (response === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(setFollowingInProgress(false, userId))
        })
}

export default usersReducer
