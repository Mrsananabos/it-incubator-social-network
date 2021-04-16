import React from "react";
import s from './Post.module.css'

export type propsType = {
    message: string
}

function Post(props: propsType) {
    return <div className={s.item}>
        <img alt={'ss'} src={'https://cryptor.net/sites/default/files/pictures/picture-425-1516178707.png'}/>
        {props.message}
        <span> like</span>
    </div>
}

export default Post;