export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> | ReturnType<typeof changeNewMessageAC> | ReturnType<typeof addMessageAC>

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}

export const changeNewTextAC = (newPostText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        postText: newPostText
    } as const
}

export const changeNewMessageAC = (newMessageText: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE",
        messageText: newMessageText
    } as const
}

export type StoreType = {
    _state: StateType,
    _callSubscriber: () => void
    _addNewPost: () => void
    _addNewMessage: () => void
    _updateNewPostText: (newPostText: string) => void
    _updateNewMessageText: (newMessageText: string) => void
    getState: () => StateType
    subscribe: (state: any) => void
    dispatch: (action: ActionsTypes) => void
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'I like you'},
                {id: 4, message: 'When will we meet?'},
                {id: 5, message: 'Have a nice summer?'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('rerender');
    },
    _addNewPost() {
        let currentText = this._state.profilePage.newPostText
        if (currentText) {
            this._state.profilePage.posts.push({
                id: this._state.profilePage.posts.length + 1,
                message: currentText,
                likesCount: 0
            })
            this._state.profilePage.newPostText = '';
        }
        this._callSubscriber();
    },
    _addNewMessage() {
        let currentText = this._state.dialogsPage.newMessageText
        if (currentText) {
            this._state.dialogsPage.messages.push({
                id: this._state.dialogsPage.messages.length + 1,
                message: currentText
            })
            this._state.dialogsPage.newMessageText = '';
        }
        this._callSubscriber();
    },
    _updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber()
    },
    _updateNewMessageText(newMessageText: string) {
        this._state.dialogsPage.newMessageText = newMessageText
        this._callSubscriber()
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case "ADD-POST":
                this._addNewPost()
                break
            case "ADD-MESSAGE":
                this._addNewMessage()
                break
            case "CHANGE-NEW-MESSAGE":
                this._updateNewMessageText(action.messageText)
                break
            case "CHANGE-NEW-TEXT":
                this._updateNewPostText(action.postText)
                break
            default:
                break
        }
    }
}

export default store;
(window as any).store = store;