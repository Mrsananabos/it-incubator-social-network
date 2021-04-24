import React from "react";
import Post from "./post/Post";
import s from "./MyPosts.module.css"
import {profilePageType} from "../../../redux/state";

function MyPosts(props: profilePageType) {
    const getPosts = props.posts.map(post => {
        return <Post post={post}/>
    })
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {getPosts}
        </div>
    </div>
}

export default MyPosts;