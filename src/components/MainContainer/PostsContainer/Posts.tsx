import React from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";
import {AllPostsPropsType} from "./PostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Posts = (props: AllPostsPropsType) => {
    const {addPostHandler} = props
    const {posts} = props.mainPages

    let postDataElements = posts.map((p, i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>)

    const onSubmit = (formData: PostDataFormType) => {
        console.log(formData)
        addPostHandler(formData.newPost)
    }
    return (
        <div className={styles.posts}>
            {postDataElements}
            <div className={styles.sendForm}>
                <PostReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

type PostDataFormType = {
    newPost: string
}

const PostForm: React.FC<InjectedFormProps<PostDataFormType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} action="">
            <Field
                component={'input'} name={'newPost'}
                className={styles.textarea}
                title={'Shift+Enter for send'}
                placeholder={'Type a new post'}
            />
            <button className={styles.button}>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm<PostDataFormType>({form: 'posts'})(PostForm)