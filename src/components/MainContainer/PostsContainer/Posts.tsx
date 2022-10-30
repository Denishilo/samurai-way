import React, {ChangeEvent} from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";
import {AllPostsPropsType} from "./PostsContainer";

export const Posts = (props: AllPostsPropsType) => {
    const {addPostHandler, changeTextHandler} = props
    const {posts, newPostText} = props.mainPages

    const onClickAddPostHandler = () => {
        addPostHandler()
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeTextHandler(e.currentTarget.value)
    }

    let postDataElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={styles.posts}>
            {postDataElements}
            <textarea onChange={onChangeTextHandler} value={newPostText}/>
            <button onClick={onClickAddPostHandler}>add post</button>
        </div>
    )
}