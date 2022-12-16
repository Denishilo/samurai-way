const ADD_MESSAGE = 'ADD-MESSAGE';

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
}
type actionDispatchType =
    ReturnType<typeof addMessageActionCreatorAC>

const initialState: dialogsPages = {
    dialogsUsers: <DialogUserTypeProps[]>[
        {id: 1, name: 'Denis'},
        {id: 2, name: 'Kseniya'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Svetlana'},
    ],
    dialogsMessages: <DialogItemTypeProps[]>[
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good'},
        {id: 4, message: 'I am study at quarter to 10 p.m.'},
        {id: 5, message: 'Great work!'},
    ],
}
export const messageReducer = (state: dialogsPages = initialState, action: actionDispatchType): dialogsPages => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: DialogItemTypeProps = {id: 6, message: action.payload.message};
            return {...state, dialogsMessages: [...state.dialogsMessages, newMessage]}
        default:
            return state
    }
}
export const addMessageActionCreatorAC = (message: string) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            message
        }
    } as const
}

