import { combineReducers } from 'redux';
import userInfo from './userInfo';
import appInfo from './appInfo';

const rootReducer = combineReducers({
	appInfo,
	userInfo,
	browserInfo: (state = {}) => state,
});

export default rootReducer;
