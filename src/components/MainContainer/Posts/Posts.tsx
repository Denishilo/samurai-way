import React from "react";
import styles from './Posts.module.css'
import {Post} from "./Post/post";
import {PostType} from "../../../redux/redux";


type PostTypeProps = {
    posts: PostType[]
    addPost:(newPost:string)=>void
}

export const Posts = (props: PostTypeProps) => {
    const{posts,addPost}=props
    const textAreaPost = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () =>{
        if(textAreaPost.current?.value){
            addPost(textAreaPost.current.value)
            textAreaPost.current.value=''
        }
    }

    let postDataElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={styles.posts}>
            {postDataElements}
            <textarea ref={textAreaPost}></textarea>
            <button onClick={onClickHandler}>add post</button>
        </div>
    )
}