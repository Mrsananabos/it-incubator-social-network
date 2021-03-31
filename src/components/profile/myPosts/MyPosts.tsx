import React from "react";
import Post from "./post/Post";

function MyPosts() {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={'posts'}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
}

export default MyPosts;