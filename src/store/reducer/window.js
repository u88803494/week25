import * as actionTypes from '../actionTypes';

const windowInitState = {
	method: '',
	show: false, // 是否顯現的值
	postId: null,
};

const windowReducer = (globalState = windowInitState, action) => {
	switch (action.type) {
		case actionTypes.SHOW_ARTICLE_MANAGEMENT_WINDOW:
			return {
				...action.postState,
				show: true,
			};
		case actionTypes.HIDE_ARTICLE_MANAGEMENT_WINDOW:
			return {
				...windowInitState, // 把狀態還原
			};
		default:
			return globalState;
	}
};

export default windowReducer;
