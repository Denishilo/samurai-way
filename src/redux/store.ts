import {addMessageActionCreatorAC, changeTextMessageAC} from "./message-reducer";
import {addNewPostAC, changeTextPostAC} from "./mainPagePostReducer";

type DialogUserTypeProps = {
    name: string
    id: number
}
type DialogItemTypeProps = {
    id: number
    message: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}

type dialogsPages = {
    dialogsUsers: DialogUserTypeProps[]
    dialogsMessages: DialogItemTypeProps[]
    newTextMessage: string
}
type mainPageType = {
    posts: PostType[]
    newPostText: string
}
export type StateTypeProps = {
    dialogsPages: dialogsPages
    mainPages: mainPageType
}

export type storeType = {
    _state: StateTypeProps
    _callSubscriber: () => void
    getState: () => StateTypeProps
    dispatch: (action: actionDispatchType) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}
type actionDispatchType =
    ReturnType<typeof addMessageActionCreatorAC>
    | ReturnType<typeof changeTextMessageAC>
    | ReturnType<typeof addNewPostAC>
    | ReturnType<typeof changeTextPostAC>

export let store: storeType = {

    _state: {
        dialogsPages: {
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
        },
        mainPages: {
            posts: <PostType[]>[
                {id: 1, message: 'Hi! how are you?', likesCount: 1},
                {id: 2, message: 'Im fine, thank you, and you?', likesCount: 4},
            ],
            newPostText: '',
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },

    // dispatch(action) {
    //     // this._state.dialogsPages = messageReducer(this._state.dialogsPages, action)
    //     // this._state.mainPages = mainPagePostReducer(this._state.mainPages,action)
    //     this._callSubscriber()
    // },
    updateNewPostText(newText: string) {
        if (newText.trim() !== '') {
            this._state.mainPages.newPostText = newText
            this._callSubscriber()
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}




