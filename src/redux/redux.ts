import {renderTree} from "../render";


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
    },
    mainPages: {
        posts: PostType[]
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
    },
    mainPages: {
        posts: <PostType[]>[
            {id: 1, message: 'Hi! how are you?', likesCount: 1},
            {id: 2, message: 'Im fine, thank you, and you?', likesCount: 4},
        ],
    }
}
export const addMessage = (message: string) => {
    const newMessage: DialogItemTypeProps = {id: 6, message: message};
    state.dialogsPages.dialogsMessages = [...state.dialogsPages.dialogsMessages, newMessage]
    renderTree(state)
}

export const addPost = (message: string) => {
    const newPost: PostType = {id: 3, message: message, likesCount: 0}
    state.mainPages.posts = [...state.mainPages.posts, newPost]
    renderTree(state)

}
