import {PostType, ProfilePageDataType} from "../types/types";
import {ActionsTypes} from "../types/dispatchTypes";

let profileInitialState: ProfilePageDataType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: '',
    profile: null
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
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export default profileReducer