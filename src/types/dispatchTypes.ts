import {UserType} from "./types"

//--------------------------------PostPageDataType
export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const changeNewTextAC = (newPostText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        postText: newPostText
    } as const
}

//--------------------------------DialogsPageDataType
export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}

export const changeNewMessageAC = (newMessageText: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE",
        messageText: newMessageText
    } as const
}

//--------------------------------UsersPageDataType
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        items: users
    } as const
}

export const setTotalUsersCountAC = (count: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        count
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT_PAGE",
        currentPage
    } as const
}

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof changeNewMessageAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setCurrentPageAC>
