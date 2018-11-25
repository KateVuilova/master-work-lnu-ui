import { combineEpics } from 'redux-observable';
import {
	forgotPasswordEpic,
	// getUserInfoEpic,
	resetPasswordEpic,
	signInEpic,
	signOutEpic,
} from './userInfo';

export default combineEpics(
	forgotPasswordEpic,
	// getUserInfoEpic,
	resetPasswordEpic,
	signInEpic,
	signOutEpic,
);
