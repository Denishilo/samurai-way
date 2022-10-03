import React from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";
import {PostType} from "../../../redux/redux";


type PostTypeProps = {
    posts: PostType[]
}

export const Posts = (props: PostTypeProps) => {

    let postDataElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={styles.posts}>
            {postDataElements}
        </div>
    )
}