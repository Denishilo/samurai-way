import React from "react";
import styles from './Post.module.css'
import like from '../../../../img/like.svg'

export const Post = (props: PostType) => {
    return (
        <>
            <div className={styles.postWrapper}>
                <div className={styles.postMessage}>
                    {props.message}
                </div>
                <div className={styles.postLike}>
                    <img className={styles.postLike_img} src={like} alt="like"/>{props.likesCount}
                </div>
            </div>
        </>
    )
}

/////// types //////

type PostType = {
    message: string
    likesCount: number

}