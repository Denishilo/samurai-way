import {actionDispatchType, DialogItemTypeProps, dialogsPages} from "./redux";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';


export const messageReducer = (state: dialogsPages, action: actionDispatchType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newTextMessage) {
                const newMessage: DialogItemTypeProps = {id: 6, message: state.newTextMessage};
                state.dialogsMessages = [...state.dialogsMessages, newMessage]
                state.newTextMessage = ''
            }
            return state
        case UPDATE_TEXT_MESSAGE:
            if (action.newMessage.trim() !== '') {
                state.newTextMessage = action.newMessage
            }
            return state
        default:
            return state
    }
}

export const addMessageActionCreatorAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}

export const changeTextMessageAC = (value: string) => {
    return {
        type: UPDATE_TEXT_MESSAGE,
        newMessage: value
    } as const
}
