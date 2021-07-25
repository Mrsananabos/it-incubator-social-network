import React from 'react'
import {UserType} from '../../types/types'
import userIcon from '../../assets/images/userIcon.png'
import s from './Users.module.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

export type UsersProps = {
  users: UserType[],
  pageSize: number,
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  setUsers: (users: UserType[]) => void
  setTotalUsersCount: (count: number) => void
  setCurrentPage: (currentPage: number) => void
  onPageChanged: (currentPage: number) => void
  setFetching: (isFetching: boolean) => void
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
            <div>
                <NavLink to={`/profile/${u.id}`}>
                     <img className={s.img} src={u.photos.small != null ? u.photos.small : userIcon} width='65'
                          height='65' />
                </NavLink>
            </div>
            <div>
                {u.followed ? <button onClick={() =>
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '37284ad1-011c-4527-aefd-0eb066a2b6e5'
                        }
                      })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id)
                        }
                      })}>Unfollow</button> :
                  <button onClick={() =>
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '37284ad1-011c-4527-aefd-0eb066a2b6e5'
                        }
                      })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id)
                        }
                      })}>Follow</button>}
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