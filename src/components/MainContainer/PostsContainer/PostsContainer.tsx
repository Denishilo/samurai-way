import React from "react";
import styles from './Posts.module.css'

import {actionDispatchType, mainPageType} from "../../../redux/store";
import {addNewPostAC, changeTextPostAC} from "../../../redux/mainPagePostReducer";
import {Posts} from "./Posts";


type PostTypeProps = {
    mainPages: mainPageType
    dispatch: (action: actionDispatchType) => void
}

export const PostsContainer = (props: PostTypeProps) => {
    const {dispatch} = props
    const {posts, newPostText} = props.mainPages

    const addPostHandler = () => {
        dispatch(addNewPostAC())
    }

    const changeTextHandler = (newText: string) => {
        dispatch(changeTextPostAC(newText))
    }

    return (
        <div className={styles.posts}>
            <Posts posts={posts} newPostText={newPostText} addPostHandler={addPostHandler}
                   changeTextHandler={changeTextHandler}/>
        </div>
    )
}