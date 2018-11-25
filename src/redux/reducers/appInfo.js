import ACTIONS from '../actionTypes';

const appInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.APP__LOAD_STATE__UPDATE:
			return {
				...state,
				loading: payload.loading,
			};
		default:
			return state;
	}
};
appInfo.updateLoadState = (loading) => ({
	type: ACTIONS.APP__LOAD_STATE__UPDATE,
	payload: {
		loading,
	},
});
export default appInfo;
