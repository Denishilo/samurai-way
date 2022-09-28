import React from "react";
import styles from './Post.module.css'

type PostType = {
    message: string,

}
export const Post = (props: PostType) => {
    return (
        <>
            <div className={styles.main_post}>
                {props.message}
            </div>
        </>

    )
}