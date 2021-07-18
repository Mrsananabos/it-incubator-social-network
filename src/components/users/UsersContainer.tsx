import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";
import {UserType} from "../../types/types";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../types/dispatchTypes";
import React from "react";
import Users, {UsersProps} from "./Users";
import axios from "axios";

class UsersContainer extends React.Component<UsersProps> {

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
        // @ts-ignore
        this.setCurrentPage(numPage)
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.pageSize}`)
            .then(response => {
                // @ts-ignore
                this.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            setUsers={this.props.setUsers}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setCurrentPage={this.props.setCurrentPage}
            onPageChanged={this.onPageChanged}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (count: number) => dispatch(setTotalUsersCountAC(count)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        onPageChanged: () => console.log('')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)







