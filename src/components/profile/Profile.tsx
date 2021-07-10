import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageProps: profilePageType,
    addNewPost: () => void
    updateNewPostText: (newPostText: string) => void
}

function Profile(props: ProfilePropsType) {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePageProps.posts} newPostText={props.profilePageProps.newPostText} addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;