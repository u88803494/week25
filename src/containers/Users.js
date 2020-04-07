import React from 'react';
import { connect } from 'react-redux';
import Users from '../component/user_interface';
import * as actions from '../actions';

const UsersContainer = props => <Users {...props} />;

const mapStateToProps = state => ({
  show: state.adminState.show,
});

const mapDispatchToProps = dispatch => ({
  onHide: () => dispatch(actions.hideAdminWindow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
