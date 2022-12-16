import React from "react";
import {addMessageActionCreatorAC, dialogsPages} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {rootReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";

type MapStateType = {
    dialogsPages: dialogsPages
}
type MapDispatchType = {
    onClickAddMessage: (message: string) => void
}

export type  AllDialogsPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: rootReducerType): MapStateType => {
    return {
        dialogsPages: state.dialogsPages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        onClickAddMessage: (message: string) => {
            dispatch(addMessageActionCreatorAC(message))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
