import React, {ChangeEvent} from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";
import {PostType} from "../../../redux/store";

type PostTypeProps = {
    posts: PostType[]
    newPostText: string
    addPostHandler: () => void
    changeTextHandler: (value: string) => void
}

export const Posts = (props: PostTypeProps) => {
    const {posts, newPostText, addPostHandler, changeTextHandler} = props

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