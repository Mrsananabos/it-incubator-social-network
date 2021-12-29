import {AuthType, PostType, ProfilePageDataType} from "../types/types";
import {ActionsTypes, setUserProfile, setUserStatus} from "../types/dispatchTypes";
import {AppDispatchType, AppStateType} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";

let profileInitialState: ProfilePageDataType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageDataType = profileInitialState, action: ActionsTypes): ProfilePageDataType => {
    switch (action.type) {
        case "ADD-POST":
            if (state.newPostText.trim() !== '') {
                const newPost: PostType = {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likesCount: 0
                }
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            } else {
                return state
            }
        case "CHANGE-NEW-TEXT":
            return {...state, newPostText: action.postText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            debugger
            return {...state, status: action.status}
        default:
            return state
    }
}

export default profileReducer

export const getUserProfileTC = (userId: string) => (dispatch: AppDispatchType, getState: () => AppStateType) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response))
        })
}

export const getUserStatus = (userId: string) => (dispatch: AppDispatchType) => {
    profileAPI.getStatus(userId)
        .then(response => {
            debugger
            dispatch(setUserStatus(response))
        })
}

export const updateUserStatus = (status: string) => (dispatch: AppDispatchType) => {
    profileAPI.updateStatus(status)
        .then(ignore => {
            debugger
            dispatch(setUserStatus(status))
        })
}