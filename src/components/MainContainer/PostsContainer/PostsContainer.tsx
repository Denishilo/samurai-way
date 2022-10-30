import React from "react";
import {addNewPostAC, changeTextPostAC, mainPageType} from "../../../redux/mainPagePostReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {rootReducerType} from "../../../redux/redux-store";

type MapStatePropsType = {
    mainPages: mainPageType
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
            dispatch(addNewPostAC())
        },
        changeTextHandler: (newText: string) => {
            dispatch(changeTextPostAC(newText))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);