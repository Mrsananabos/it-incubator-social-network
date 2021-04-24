import React, {ChangeEvent, useState} from "react";
import Post from "./post/Post";
import s from "./MyPosts.module.css"
import {profilePageType} from "../../../redux/state";

function MyPosts(props: profilePageType) {
    let[currentText, setCurrentText] = useState('');

    function onChangeCurrentTextHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        setCurrentText(e.target.value)
    }

    function onClickAddPostHandler() {
        props.addPost(currentText);
        setCurrentText('')
    }

    const getPosts = props.posts.map(post => {
        return <Post post={post}/>
    })
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={(e) => onChangeCurrentTextHandler(e)}>{currentText}</textarea>
            </div>
            <div>
                <button onClick={onClickAddPostHandler}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {getPosts}
        </div>
    </div>
}

export default MyPosts;