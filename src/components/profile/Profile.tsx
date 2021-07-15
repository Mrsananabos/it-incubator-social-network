import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../types/types";
import {ActionsTypes} from "../../types/dispatchTypes";
import MyPostsContainer from "./myPosts/MyPostsContainer";

type ProfilePropsType = {
    profilePageProps: ProfilePageType,
    dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfilePropsType) {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}

export default Profile;