import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

function Profile() {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}

export default Profile;