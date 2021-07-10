import {ActionsTypes, ProfilePageType} from "./store";

const profileReducer = (profilePage: ProfilePageType, action: ActionsTypes): ProfilePageType => {
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