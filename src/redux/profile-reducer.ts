import {PostType, ProfilePageType} from "../types/types";
import {ActionsTypes} from "../types/dispatchTypes";

let profileInitialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: ''
}

const profileReducer = (profilePage: ProfilePageType = profileInitialState, action: ActionsTypes): ProfilePageType => {
    debugger
    switch (action.type) {
        case "ADD-POST":
            if (profilePage.newPostText.trim() !== '') {
                const newPost: PostType = {
                    id: profilePage.posts.length + 1,
                    message: profilePage.newPostText,
                    likesCount: 0
                }
                return {
                    ...profilePage,
                    posts: [...profilePage.posts, newPost],
                    newPostText: ''
                }
            } else {
                return profilePage
            }
        case "CHANGE-NEW-TEXT":
            return {...profilePage, newPostText: action.postText}
        default:
            return profilePage
    }
}

export default profileReducer