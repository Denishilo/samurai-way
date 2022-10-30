import React from "react";
import styles from './Posts.module.css'
import {addNewPostAC, changeTextPostAC} from "../../../redux/mainPagePostReducer";
import {Posts} from "./Posts";
import {StoreContext} from "../../../StoreContext";

export const PostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            const addPostHandler = () => {
                store.dispatch(addNewPostAC())
            }

            const changeTextHandler = (newText: string) => {
                store.dispatch(changeTextPostAC(newText))
            }

            return (
                <div className={styles.posts}>
                    <Posts posts={store.getState().mainPages.posts} newPostText={store.getState().mainPages.newPostText}
                           addPostHandler={addPostHandler}
                           changeTextHandler={changeTextHandler}/>
                </div>
            )
        }

        }
    </StoreContext.Consumer>

}