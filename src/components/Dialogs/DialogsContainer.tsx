import React from "react";
import {addMessageActionCreatorAC, changeTextMessageAC, dialogsPages} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {rootReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";

type MapStateType = {
    dialogsPages: dialogsPages
}
type MapDispatchType = {
    onClickAddMessage: () => void
    onChangeTextMessage: (newTextMessage: string) => void
}

export type  AllDialogsPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: rootReducerType): MapStateType => {
    return {
        dialogsPages: state.dialogsPages,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);