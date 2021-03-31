import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";

function Profile() {
    return <div className={s.content}>
        <img
            src={'https://www.rgo.ru/sites/default/files/styles/head_image_article/public/odna_iz_konkursnyh_rabot_2011_goda._ogonkovyy_miting._v.a._masoshin.jpg?itok=xsNrqUux'}></img>
        <div>
            ava + desc
        </div>
        <MyPosts />
    </div>
}

export default Profile;