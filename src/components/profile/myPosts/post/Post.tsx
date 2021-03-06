import React from "react";
import { PostType } from "../../../../types/types";
import s from './Post.module.css'

type PropsPost = {
    post: PostType
}
function Post(props: PropsPost) {
    return <div key={props.post.id} className={s.item}>
        <img alt={'ss'} src={'https://cryptor.net/sites/default/files/pictures/picture-425-1516178707.png'}/>
        {props.post.message}
        <span> like</span>{props.post.likesCount}
    </div>
}

export default Post;