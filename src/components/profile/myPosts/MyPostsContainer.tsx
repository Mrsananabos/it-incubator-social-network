import React from "react";
import {addPost} from "../../../types/dispatchTypes";
import MyPosts from "./MyPosts";
import {AppDispatchType, AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profileReducer.posts
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPost: (newPost: string) => dispatch(addPost(newPost))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;