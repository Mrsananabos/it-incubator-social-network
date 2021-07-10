import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePageProps: ProfilePageType,
    dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfilePropsType) {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePageProps.posts} newPostText={props.profilePageProps.newPostText}
                 dispatch={props.dispatch}/>
    </div>
}

export default Profile;