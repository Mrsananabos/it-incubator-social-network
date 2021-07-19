import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileProps} from "../Profile";
import Preloader from "../../../common/Preloader";
import userIcon from "../../../assets/images/userIcon.png"

function ProfileInfo(props: ProfileProps) {
    if (!props.profile) {
        return <Preloader/>
    }

    let avaPath = props.profile.photos.large
    let fullName = props.profile.fullName
    let descUser = props.profile.aboutMe
    return <div>
        <img
            src={'https://www.rgo.ru/sites/default/files/styles/head_image_article/public/odna_iz_konkursnyh_rabot_2011_goda._ogonkovyy_miting._v.a._masoshin.jpg?itok=xsNrqUux'}></img>
        <div className={s.descBlock}>

            <img src={avaPath ? avaPath : userIcon}/>
            <div>{fullName}</div>
            <div>About me: {descUser ? descUser : 'is empty :('}</div>
        </div>
    </div>
}

export default ProfileInfo