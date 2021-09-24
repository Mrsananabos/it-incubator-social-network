import React from 'react'
import {UserType} from '../../types/types'
import userIcon from '../../assets/images/userIcon.png'
import s from './Users.module.css'
import {NavLink} from 'react-router-dom'
import Preloader from "../../common/Preloader";

export type UsersProps = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    onPageChanged: (currentPage: number) => void
    setFollowingInProgress: (followingInProgress: boolean, userId: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

function Users(props: UsersProps) {
    const pagesCount = props.totalUsersCount / props.pageSize

    const numPages = []
    for (let i = 1; i <= 10; i++) {
        numPages.push(i)
    }

    const users = props.users.map(u => {
        return <span>
            {props.followingInProgress.some(id => id === u.id) ? <Preloader/> : <></>}
            <div>
                <NavLink to={`/profile/${u.id}`}>
                     <img className={s.img} src={u.photos.small != null ? u.photos.small : userIcon} width='65'
                          height='65'/>
                </NavLink>
            </div>
            <div>
                {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.unfollow(u.id);
                    }}>Unfollow</button> :
                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.follow(u.id)
                            }}>
                        Follow</button>}
            </div>
            {u.name}
        </span>
    })

    return (
        <>
            <div>
                {numPages.map(num => <span className={num === props.currentPage ? s.selectedPage : ''}
                                           onClick={() => props.onPageChanged(num)}>{`${num} `}</span>)}
            </div>

            <div>
                {users}
            </div>
        </>
    )
}

export default Users