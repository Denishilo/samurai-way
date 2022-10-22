export type DialogUserTypeProps = {
    name: string
    id: number
}
export type DialogItemTypeProps = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type StateTypeProps = {
    dialogsPages: {
        dialogsUsers: DialogUserTypeProps[]
        dialogsMessages: DialogItemTypeProps[]
        newTextMessage: string
    },
    mainPages: {
        posts: PostType[]
        newPostText: string
    }
}

export type storeType = {
    _state: StateTypeProps,
    _callSubscriber: () => void,
    getState: () => void,
    dispatch: (action: actionDispatchType) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}

export type actionDispatchType =
    ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof changeTextMessage>
    | ReturnType<typeof addNewPost>
    | ReturnType<typeof changeTextPost>

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

    dispatch(action) {
        if (action.type === 'ADD-MESSAGE') {
            if (this._state.dialogsPages.newTextMessage) {
                const newMessage: DialogItemTypeProps = {id: 6, message: this._state.dialogsPages.newTextMessage};
                this._state.dialogsPages.dialogsMessages = [...this._state.dialogsPages.dialogsMessages, newMessage]
                this._state.dialogsPages.newTextMessage = ''
                this._callSubscriber()
            }
        }
        if (action.type === 'UPDATE-TEXT-MESSAGE') {
            if (action.newMessage.trim() !== '') {
                this._state.dialogsPages.newTextMessage = action.newMessage
                this._callSubscriber()
            }
        }
        if (action.type === 'ADD-POST') {
            if (this._state.mainPages.newPostText) {
                const newPost: PostType = {id: 3, message: this._state.mainPages.newPostText, likesCount: 0}
                this._state.mainPages.posts = [...this._state.mainPages.posts, newPost]
                this._state.mainPages.newPostText = ''
                this._callSubscriber()
            }
        }
        if (action.type === 'CHANGE-TEXT-POST') {
            if (action.newText.trim() !== '') {
                this._state.mainPages.newPostText = action.newText
                this._callSubscriber()
            }
        }
    },
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

export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const changeTextMessage = (value: string) => {
    return {
        type: 'UPDATE-TEXT-MESSAGE',
        newMessage: value
    } as const
}

export const addNewPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changeTextPost = (newText: string) => {
    return {
        type: 'CHANGE-TEXT-POST',
        newText,
    } as const
}
