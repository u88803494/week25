import React from 'react';
import { connect } from 'react-redux';
import Nav from '../component/nav';
import * as windowActions from '../store/actions/window';

const NavContainer = props => <Nav {...props} />;

const mapStateToProps = state => {
  return ({
    isLogin: state.adminState.isLogin,
    profileName: state.adminState.profileName,
  });
}

const mapDispatchToProps = dispatch => ({
  onShow: () => dispatch(windowActions.showAdminWindow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
