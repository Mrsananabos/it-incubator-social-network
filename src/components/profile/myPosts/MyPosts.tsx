import React from "react";
import Post from "./post/Post";
import s from "./MyPosts.module.css"
import {PostType} from "../../../types/types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxFieldLength30, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../../common/formsControlls/FormController";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPost: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    const getPosts = props.posts.map(post => {
        return <Post post={post}/>
    })

    const addNewPost = (values: DialogsNewMessageFormType) => {
        props.addPost(values.newPostBody)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <AddMessageFormRedux onSubmit={addNewPost}/>
        </div>
        <div className={s.posts}>
            {getPosts}
        </div>
    </div>
}

type DialogsNewMessageFormType = {
    newPostBody: string
}
const AddMessageFormRedux = reduxForm<DialogsNewMessageFormType>({
    form: 'profileAddPost'
})(AddPostForm)

function AddPostForm(props: InjectedFormProps<DialogsNewMessageFormType>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={"newPostBody"} placeholder={"Enter your post"}
                       validate={[requiredField, maxFieldLength30]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default MyPosts;