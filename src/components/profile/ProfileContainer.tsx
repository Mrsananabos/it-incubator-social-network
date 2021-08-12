import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {setUserProfile} from "../../types/dispatchTypes";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component<ProfileContainerWithRoutePropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        usersAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profileReducer.profile
    }
}
type ProfileContainerProps = ConnectedProps<typeof connector>;
type PathParamsType = { userId: string }
type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfileContainerProps
const WithUrlDataProfileContainer = withRouter(ProfileContainer);
const connector = connect(mapStateToProps, {setUserProfile})
export default connector(WithUrlDataProfileContainer)