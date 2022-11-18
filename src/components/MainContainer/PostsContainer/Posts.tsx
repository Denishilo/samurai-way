import React, {ChangeEvent} from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";
import {AllPostsPropsType} from "./PostsContainer";
import {PostType} from "../../../redux/mainPagePostReducer";


// type PostsTypeProps = {
//     addPostHandler:()=>void
//     changeTextHandler:(value:string)=>void
//     posts:PostType[]
//     newPostText:string
// }
export const Posts = (props: AllPostsPropsType) => {
    const {addPostHandler, changeTextHandler} = props
    const {posts, newPostText} = props.mainPages

    const onClickAddPostHandler = () => {
        addPostHandler()
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeTextHandler(e.currentTarget.value)
    }

    let postDataElements = posts.map((p,i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={styles.posts}>
            {postDataElements}
            <div className={styles.sendForm}>
                <textarea
                    className={styles.textarea}
                    title={'Shift+Enter for send'}
                    placeholder={'Type a new post'}
                    value={newPostText}
                    onChange={onChangeTextHandler}
                />
                <button className={styles.button} onClick={onClickAddPostHandler}>Add post</button>
            </div>
        </div>
    )
}