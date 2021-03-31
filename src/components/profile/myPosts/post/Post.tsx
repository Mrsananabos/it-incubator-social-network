import React from "react";
import  s from './Post.module.css'

function Post() {
    return <div className={s.item}>
        <img alt={'ss'} src={'https://cryptor.net/sites/default/files/pictures/picture-425-1516178707.png'}/>
        Post1
        <span> like</span>
    </div>
}

export default Post;