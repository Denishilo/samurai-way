import React, {ChangeEvent} from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";
import {PostType} from "../../../redux/redux";


type PostTypeProps = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Posts = (props: PostTypeProps) => {
    const {posts, addPost, newPostText, updateNewPostText} = props


    const onClickAddPostHandler = () => {
            addPost()
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
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