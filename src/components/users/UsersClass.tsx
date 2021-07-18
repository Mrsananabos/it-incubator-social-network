import React from "react";
import {UsersProps} from "./Users";
import axios from "axios";
import userIcon from '../../assets/images/userIcon.png'
import s from "./Users.module.css"

class Users extends React.Component<UsersProps> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChanged(numPage: number) {
        this.props.setCurrentPage(numPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        const pagesCount = this.props.totalUsersCount / this.props.pageSize

        const numPages = []
        for (let i = 1; i <= 10; i++) {
            numPages.push(i)
        }

        const users = this.props.users.map(u => {
            return <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : userIcon} width="65" height="65"/>
            </div>
            <div>
                {u.followed ? <button>Unfollow</button> : <button>Follow</button>}
            </div>
                {u.name}
        </span>
        })

        return (
            <>
                <div>
                    {numPages.map(num => <span className={num === this.props.currentPage ? s.selectedPage : ''}
                                               onClick={() => this.onPageChanged(num)}>{`${num} `}</span>)}
                </div>

                <div>
                    {users}
                </div>
            </>
        )
    }
}

export default Users;