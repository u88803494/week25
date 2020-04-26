import React from 'react';
import { connect } from 'react-redux';
import Users from '../component/user_interface';
import * as actions from '../actions';

const UsersContainer = props => <Users {...props} />;

const mapStateToProps = state => ({
  show: state.adminState.show,
  isLogin: state.adminState.isLogin,
  profileName: state.adminState.profileName,
  token: state.adminState.token,
  userId: state.adminState.userId,
});

const mapDispatchToProps = dispatch => ({
  onHide: () => dispatch(actions.hideAdminWindow()),
  thirdPartyLogin: provider => dispatch(actions.thirdPartyLogin(provider)),
  getCookiesLoginState: loginState => dispatch(actions.getCookiesLoginState(loginState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
