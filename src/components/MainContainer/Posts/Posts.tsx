import React, {ChangeEvent} from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";
import {actionDispatchType, PostType} from "../../../redux/redux";
import {addNewPostAC, changeTextPostAC} from "../../../redux/mainPagePostReducer";


type PostTypeProps = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: actionDispatchType) => void
}

export const Posts = (props: PostTypeProps) => {
    const {posts, newPostText, dispatch} = props


    const onClickAddPostHandler = () => {
        dispatch(addNewPostAC())
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeTextPostAC(e.currentTarget.value))
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