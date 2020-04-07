import React from 'react';
import { connect } from 'react-redux';
import Nav from '../component/nav';
import * as actions from '../actions';

const NavContainer = props => <Nav {...props} />;

const mapDispatchToProps = dispatch => ({
  onShow: () => dispatch(actions.showAdminWindow()),
});

export default connect(null, mapDispatchToProps)(NavContainer);
