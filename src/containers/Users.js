import React from 'react';
import { connect } from 'react-redux';
import Users from '../component/user_interface';
import * as windowActions from '../store/actions/window';
import * as adminActions from '../store/actions/admin';

const UsersContainer = props => <Users {...props} />;

const mapStateToProps = state => ({
  show: state.adminState.show,
  isLogin: state.adminState.isLogin,
  profileName: state.adminState.profileName,
  token: state.adminState.token,
  userId: state.adminState.userId,
});

const mapDispatchToProps = dispatch => ({
  onHide: () => dispatch(windowActions.hideAdminWindow()),
  thirdPartyLogin: provider => dispatch(adminActions.thirdPartyLogin(provider)),
  thirdPartySignOut: () => dispatch(adminActions.thirdPartySignOut()),
  getCookiesLoginState: loginState => dispatch(adminActions.getCookiesLoginState(loginState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
