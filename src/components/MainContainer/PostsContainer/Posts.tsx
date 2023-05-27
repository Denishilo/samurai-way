import React from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";
import {AllPostsPropsType} from "./PostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "utilites/validator/validator";
import {Input} from "components/FormsControls/Input";

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

const maxLength10 = maxLengthCreator(150)
const PostForm: React.FC<InjectedFormProps<PostDataFormType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form className={styles.sendForm} onSubmit={handleSubmit} action="">
            <Field
                component={Input} name={'newPost'}
                className={styles.textarea}
                title={'Shift+Enter for send'}
                placeholder={'Type a new post'}
                validate={[requiredField,maxLength10]}
            />
            <button className={styles.button}>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm<PostDataFormType>({form: 'posts'})(PostForm)

///// types ////
type PostDataFormType = {
    newPost: string
}