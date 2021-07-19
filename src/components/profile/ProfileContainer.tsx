import React from "react";
import axios from "axios";
import {connect, ConnectedProps} from "react-redux";
import {setUserProfile} from "../../types/dispatchTypes";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component<ProfileContainerWithRoutePropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
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