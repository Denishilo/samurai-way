import React from "react";
import {addMessageActionCreatorAC, changeTextMessageAC, dialogsPages} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateType = {
    dialogPages: dialogsPages
}
type MapDispatchType = {
    onClickAddMessage: () => void
    onChangeTextMessage: (newTextMessage: string) => void
}

export type  AllDialogsPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: MapStateType): MapStateType => {
    return {
        dialogPages: state.dialogPages
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