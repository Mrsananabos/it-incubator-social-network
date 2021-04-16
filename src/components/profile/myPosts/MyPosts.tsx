import React from "react";
import Post from "./post/Post";
import s from "./MyPosts.module.css"

function MyPosts() {
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
            <Post message='Hi. how are you?'/>
            <Post message="it's my first post"/>
            <Post message='Good day!'/>
        </div>
    </div>
}

export default MyPosts;