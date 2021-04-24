import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

function Profile(props: profilePageType) {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
}

export default Profile;