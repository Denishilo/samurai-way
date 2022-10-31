const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

export type DialogUserTypeProps = {
    name: string
    id: number
}
export type DialogItemTypeProps = {
    id: number
    message: string
}
export type dialogsPages = {
    dialogsUsers: DialogUserTypeProps[]
    dialogsMessages: DialogItemTypeProps[]
    newTextMessage: string
}
type actionDispatchType =
    ReturnType<typeof addMessageActionCreatorAC>
    | ReturnType<typeof changeTextMessageAC>

const initialState: dialogsPages = {
    dialogsUsers: <DialogUserTypeProps[]>[
        {id: 1, name: 'Denis'},
        {id: 2, name: 'Kseniya'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Svetlana'},
    ],
    dialogsMessages: <DialogItemTypeProps[]>[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you\''},
        {id: 3, message: 'Good'},
        {id: 4, message: 'I am study at quarter to 10 p.m.'},
        {id: 5, message: 'Great work'},
    ],
    newTextMessage: '',
}
export const messageReducer = (state: dialogsPages = initialState, action: actionDispatchType): dialogsPages => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newTextMessage) {
                const newMessage: DialogItemTypeProps = {id: 6, message: state.newTextMessage};
                state.newTextMessage = '';
                return {...state, dialogsMessages: [...state.dialogsMessages, newMessage]}
            }
            return state
        case UPDATE_TEXT_MESSAGE:
            if (action.newMessage.trim() !== '') {
                return {...state, newTextMessage: action.newMessage}
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
