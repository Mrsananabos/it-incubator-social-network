import React from "react";
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return <div>
        <img
            src={'https://www.rgo.ru/sites/default/files/styles/head_image_article/public/odna_iz_konkursnyh_rabot_2011_goda._ogonkovyy_miting._v.a._masoshin.jpg?itok=xsNrqUux'}></img>
        <div className={s.descBlock}>
            ava + desc
        </div>
    </div>
}

export default ProfileInfo