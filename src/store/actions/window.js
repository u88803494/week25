import * as actionTypes from '../actionTypes';

export const showManagementWindow = postState => ({
  type: actionTypes.SHOW_ARTICLE_MANAGEMENT_WINDOW,
  postState,
});

export const hideManagementWindow = () => ({
  type: actionTypes.HIDE_ARTICLE_MANAGEMENT_WINDOW,
});

export const showAdminWindow = () => ({
  type: actionTypes.SHOW_ADMIN_WINDOW,
});

export const hideAdminWindow = () => ({
  type: actionTypes.HIDE_ADMIN_WINDOW,
});