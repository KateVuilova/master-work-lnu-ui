import ACTIONS from '../actionTypes';

const userInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.USER__SIGN_IN__REQUEST:
			return {
				...state,
				fetching: true,
				signInError: false,
			};
		case ACTIONS.USER__SIGN_IN__REQUEST_SUCCESS:
		case ACTIONS.USER__GET_INFO__REQUEST_SUCCESS:
			return {
				...state,
				...payload,
				fetching: false,
				signInError: false,
				signedIn: true,
			};
		case ACTIONS.USER__SIGN_IN__REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				signInError: true,
			};
		case ACTIONS.USER__SIGN_OUT:
			return {
				signedIn: false,
			};
		case ACTIONS.USER__GET_INFO__REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				accessToken: null,
				signedIn: false,
			};
		case ACTIONS.USER__FORGOT_PASSWORD__REQUEST:
		case ACTIONS.USER__RESET_PASSWORD__REQUEST:
			return {
				...state,
				fetching: true,
			};
		default:
			return state;
	}
};

userInfo.signIn = (payload) => ({
	type: ACTIONS.USER__SIGN_IN__REQUEST,
	payload,
});

userInfo.signInSuccess = (payload) => ({
	type: ACTIONS.USER__SIGN_IN__REQUEST_SUCCESS,
	payload,
});

userInfo.signInError = () => ({
	type: ACTIONS.USER__SIGN_IN__REQUEST_ERROR,
});

userInfo.signOut = () => ({
	type: ACTIONS.USER__SIGN_OUT,
});

userInfo.getUserInfo = (payload) => ({
	type: ACTIONS.USER__GET_INFO__REQUEST,
	payload,
});

userInfo.getUserInfoSuccess = (payload) => ({
	type: ACTIONS.USER__GET_INFO__REQUEST_SUCCESS,
	payload,
});

userInfo.getUserInfoError = () => ({
	type: ACTIONS.USER__GET_INFO__REQUEST_ERROR,
});

userInfo.forgotPassword = (payload) => ({
	type: ACTIONS.USER__FORGOT_PASSWORD__REQUEST,
	payload,
});

userInfo.forgotPasswordSuccess = (payload) => ({
	type: ACTIONS.USER__FORGOT_PASSWORD__REQUEST_SUCCESS,
	payload,
});

userInfo.forgotPasswordError = (payload) => ({
	type: ACTIONS.USER__FORGOT_PASSWORD__REQUEST_ERROR,
	payload,
});

userInfo.resetPassword = (payload) => ({
	type: ACTIONS.USER__RESET_PASSWORD__REQUEST,
	payload,
});

export default userInfo;
