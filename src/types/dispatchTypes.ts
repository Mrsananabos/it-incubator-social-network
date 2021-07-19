import {ProfileInfoType, UserType} from "./types"

//--------------------------------ProfilePageDataType
export const addPost = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const changeNewText = (newPostText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        postText: newPostText
    } as const
}

export const setUserProfile = (profile: ProfileInfoType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

//--------------------------------DialogsPageDataType
export const addNewMessage = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}

export const changeNewMessage = (newMessageText: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE",
        messageText: newMessageText
    } as const
}

//--------------------------------UsersPageDataType
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        items: users
    } as const
}

export const setTotalUsersCount = (count: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        count
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT_PAGE",
        currentPage
    } as const
}

export const setFetching = (isFetching: boolean) => {
    return {
        type: "SET-FETCHING",
        isFetching
    } as const
}

export type ActionsTypes = ReturnType<typeof addPost>
    | ReturnType<typeof changeNewText>
    | ReturnType<typeof changeNewMessage>
    | ReturnType<typeof addNewMessage>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setUserProfile>

