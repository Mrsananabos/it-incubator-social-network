import {ProfilePageType} from "../types/types";
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
    switch (action.type) {
        case "ADD-POST":
            let currentText = profilePage.newPostText
            if (currentText) {
                profilePage.posts.push({
                    id: profilePage.posts.length + 1,
                    message: currentText,
                    likesCount: 0
                })
                profilePage.newPostText = '';
            }
            return profilePage;
        case "CHANGE-NEW-TEXT":
            profilePage.newPostText = action.postText
            return profilePage
        default:
            return profilePage
    }
}

export default profileReducer