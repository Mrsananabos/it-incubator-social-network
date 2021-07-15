import React from "react";
import {addPostAC, changeNewTextAC} from "../../../types/dispatchTypes";
import MyPosts from "./MyPosts";
import {AppDispatchType, AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPostText: (postText: string) => dispatch(changeNewTextAC(postText))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;