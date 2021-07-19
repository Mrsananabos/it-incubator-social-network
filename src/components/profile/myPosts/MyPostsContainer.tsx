import React from "react";
import {addPost, changeNewText} from "../../../types/dispatchTypes";
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
        addPost: () => dispatch(addPost()),
        updateNewPostText: (postText: string) => dispatch(changeNewText(postText))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;