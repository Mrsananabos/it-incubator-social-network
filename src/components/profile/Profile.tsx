import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileInfoType} from "../../types/types";

export type ProfileProps = {
    profile: ProfileInfoType | null,
    status: string,
    updateStatus: (status: string) => void
}
function Profile(props: ProfileProps) {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;