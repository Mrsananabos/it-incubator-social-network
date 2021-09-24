import {connect, ConnectedProps} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {setCurrentPage, setFetching, setFollowingInProgress} from '../../types/dispatchTypes'
import React from 'react'
import Users from './Users'
import Preloader from '../../common/Preloader'
import {
    followUserThunkCreator,
    getUsersThunkCreater,
    pageChangerThunkCreator,
    unfollowUserThunkCreator
} from "../../redux/users-reducer";

class UsersContainer extends React.Component<UsersContainerProps> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (numPage: number) => {
        this.props.updatePage(numPage, this.props.pageSize)
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
                follow={this.props.followUserThunkCreator}
                unfollow={this.props.unfollowUserThunkCreator}
                onPageChanged={this.onPageChanged}
                setFollowingInProgress={this.props.setFollowingInProgress}
                followingInProgress={this.props.followingInProgress}/></>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
    }
}

const connector = connect(mapStateToProps, {
    setCurrentPage,
    onPageChanged: () => console.log(''),
    setFetching,
    followUserThunkCreator,
    unfollowUserThunkCreator,
    setFollowingInProgress,
    getUsers: getUsersThunkCreater,
    updatePage: pageChangerThunkCreator
})

type UsersContainerProps = ConnectedProps<typeof connector>;
export default connector(UsersContainer)







