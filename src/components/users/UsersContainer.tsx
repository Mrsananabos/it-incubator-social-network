import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setCurrentPage, setFetching, setTotalUsersCount, setUsers} from "../../types/dispatchTypes";
import React from "react";
import Users from "./Users";
import axios from "axios";
import Preloader from "../../common/Preloader";

class UsersContainer extends React.Component<UsersContainerProps> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }


    onPageChanged(numPage: number) {
        // @ts-ignore
        this.setCurrentPage(numPage)
        // @ts-ignore
        this.setFetching(true)
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.pageSize}`)
            .then(response => {
                // @ts-ignore
                this.setFetching(false)
                // @ts-ignore
                this.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : ''}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                setUsers={this.props.setUsers}
                setTotalUsersCount={this.props.setTotalUsersCount}
                setCurrentPage={this.props.setCurrentPage}
                onPageChanged={this.onPageChanged} setFetching={this.props.setFetching}/></>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}

const connector = connect(mapStateToProps, {
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    onPageChanged: () => console.log(''),
    setFetching
})

type UsersContainerProps = ConnectedProps<typeof connector>;
export default connector(UsersContainer)







