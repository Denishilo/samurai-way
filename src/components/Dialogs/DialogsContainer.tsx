import React from "react";
import {addMessageActionCreatorAC, changeTextMessageAC, dialogsPages} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserDataType} from "../../redux/userAuthReducer";
import {rootReducerType} from "../../redux/redux-store";

type MapStateType = {
    dialogsPages: dialogsPages
    data:UserDataType
}
type MapDispatchType = {
    onClickAddMessage: () => void
    onChangeTextMessage: (newTextMessage: string) => void
}

export type  AllDialogsPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: rootReducerType): MapStateType => {
    return {
        dialogsPages: state.dialogsPages,
        data: state.userAuth.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        onClickAddMessage: () => {
            dispatch(addMessageActionCreatorAC())
        },
        onChangeTextMessage: (newTextMessage: string) => {
            dispatch(changeTextMessageAC(newTextMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);