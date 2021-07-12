import React from "react";

import {ProfilePageType} from "../../../types/types";
import {ActionsTypes, addPostAC, changeNewTextAC} from "../../../types/dispatchTypes";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    profilePageProps: ProfilePageType,
    dispatch: (action: ActionsTypes) => void
}

function MyPostsContainer(props: MyPostsPropsType) {

    return <MyPosts posts={props.profilePageProps.posts} newPostText={props.profilePageProps.newPostText}
                    updateNePostText={(postText) => props.dispatch(changeNewTextAC(postText))}
                    addPost={() => props.dispatch(addPostAC())}/>
}

export default MyPostsContainer;