//--------------------------------PostPageTypes
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

//--------------------------------DialogsPageTypes
type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}