import React from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";


export const Posts = () => {
    return (
        <div className={styles.posts}>
            <Post message='Hi! how are you?'/>
            <Post message='Im fine, thank you, and you?'/>

        </div>
    )
}