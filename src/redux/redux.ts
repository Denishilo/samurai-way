let renderTree = (state:StateTypeProps) => {}

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

export const state: StateTypeProps = {
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
        newTextMessage: ''
    },
    mainPages: {
        posts: <PostType[]>[
            {id: 1, message: 'Hi! how are you?', likesCount: 1},
            {id: 2, message: 'Im fine, thank you, and you?', likesCount: 4},
        ],
        newPostText: '',
    }
}
export const addMessage = () => {
    if (state.dialogsPages.newTextMessage) {
        const newMessage: DialogItemTypeProps = {id: 6, message: state.dialogsPages.newTextMessage};
        state.dialogsPages.dialogsMessages = [...state.dialogsPages.dialogsMessages, newMessage]
        state.dialogsPages.newTextMessage = ''
        console.log(state.dialogsPages.dialogsMessages)
        renderTree(state)
    }

}

export const addPost = () => {
    if (state.mainPages.newPostText) {
        const newPost: PostType = {id: 3, message: state.mainPages.newPostText, likesCount: 0}
        state.mainPages.posts = [...state.mainPages.posts, newPost]
        state.mainPages.newPostText = ''
        renderTree(state)
    }
}

export const updateNewPostText = (newText: string) => {
    if (newText.trim() !== '') {
        state.mainPages.newPostText = newText
        renderTree(state)
    }
}

export const updateNewTextMessage = (newMessage: string) => {
    if (newMessage.trim() !== '') {
        state.dialogsPages.newTextMessage = newMessage
        renderTree(state)
    }
}

export const subscribe = (observer: (state:StateTypeProps) => void) => {
    renderTree = observer
}

