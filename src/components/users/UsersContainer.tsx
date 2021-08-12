import {connect, ConnectedProps} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {
  follow,
  setCurrentPage,
  setFetching,
  setFollowingInProgress,
  setTotalUsersCount,
  setUsers,
  unfollow
} from '../../types/dispatchTypes'
import React from 'react'
import Users from './Users'
import Preloader from '../../common/Preloader'
import {usersAPI} from '../../api/api'

class UsersContainer extends React.Component<UsersContainerProps> {

  componentDidMount() {
    if (this.props.users.length === 0) {
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(response => {
          this.props.setFetching(false)
          this.props.setUsers(response.items)
          this.props.setTotalUsersCount(response.totalCount)
        })
    }
  }


  onPageChanged(numPage: number) {
    // @ts-ignore
    this.setCurrentPage(numPage)
    // @ts-ignore
    this.setFetching(true)
    // @ts-ignore
    usersAPI.getUsers(numPage, this.pageSize)
      .then(response => {
        // @ts-ignore
        this.setFetching(false)
        // @ts-ignore
        this.setUsers(response.items)
      })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : ''}
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        setUsers={this.props.setUsers}
        setTotalUsersCount={this.props.setTotalUsersCount}
        setCurrentPage={this.props.setCurrentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        setFetching={this.props.setFetching}
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
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  onPageChanged: () => console.log(''),
  setFetching,
  follow,
  unfollow,
  setFollowingInProgress
})

type UsersContainerProps = ConnectedProps<typeof connector>;
export default connector(UsersContainer)







