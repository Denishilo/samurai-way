import React from "react";
import {addNewPost, changeTextPost, MainPageType} from "../../../redux/mainPagePostReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {rootReducerType} from "../../../redux/redux-store";

type MapStatePropsType = {
    mainPages: MainPageType
}

type MapDispatchPropsType = {
    addPostHandler: () => void
    changeTextHandler: (newText: string) => void
}

export type AllPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        mainPages: state.mainPages
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostHandler: () => {
            dispatch(addNewPost())
        },
        changeTextHandler: (newText: string) => {
            dispatch(changeTextPost(newText))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);