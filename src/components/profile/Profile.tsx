import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

function Profile() {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts />
    </div>
}

export default Profile;