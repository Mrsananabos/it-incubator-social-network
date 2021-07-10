import React, {ChangeEvent} from "react";
import Post from "./post/Post";
import s from "./MyPosts.module.css"
import {postType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<postType>
    newPostText: string
    addNewPost: () => void
    updateNewPostText: (newPostText: string) => void
}

function MyPosts(props: MyPostsPropsType) {
    function onChangeCurrentTextHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        props.updateNewPostText(e.target.value)
    }

    function onClickAddPostHandler() {
        props.addNewPost()
        props.updateNewPostText('')
    }

    const getPosts = props.posts.map(post => {
        return <Post post={post}/>
    })
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={(e) => onChangeCurrentTextHandler(e)} value={props.newPostText}/>
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