import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { concat, ignoreElements, map, switchMap, tap, delay, merge } from 'rxjs/operators';
import ACTIONS from '../actionTypes';
import constants from '../../constants';
import { httpApi } from '../../utils';
import { appInfo, userInfo } from '../reducers';

const { routes } = constants;

const { api } = constants.common;
const { USER_ACCESS_TOKEN, FIREBASE_ACCESS_TOKEN } = constants.common.localStorageKeys;

const signInFetch = (body) => httpApi.post(`${api}/token`, body);
// const getUserInfoFetch = (Authorization) => httpApi.get(`${api}/user`, { Authorization });
const generateUrlToResetPassword = (resetPasswordPath, location = window.location) => {
	const { origin } = location;
	return `${origin}${resetPasswordPath}`;
};
const forgotPasswordFetch = (body) =>
	httpApi.post(`${api}/auth/client-forgot-password`, body);

const resetPasswordFetch = (body, Authorization) =>
	httpApi.post(`${api}/auth/new-password`, body, { Authorization });

// const getAccessTokenFromStore = (store) => {
// 	const state = store.value;
// 	return state.userInfo && state.userInfo.accessToken;
// };

// const getUserIdFromStore = (store) => {
// 	const state = store.value;
// 	return state.userInfo && state.userInfo._id;
// };

const saveAccessToken = (accessToken) => localStorage.setItem(USER_ACCESS_TOKEN, accessToken);

// const createListOfUSerInfoActions = ([res]) => {
// 	if (res.error) {
// 		return of(appInfo.updateLoadState(false), userInfo.signOut());
// 	}
// 	const action$ = of(userInfo.getUserInfoSuccess(res));
// 	return action$.pipe(concat(of(appInfo.updateLoadState(false)).pipe(delay(1000))));
// };

let firebaseAuthRef;

export const signInEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__SIGN_IN__REQUEST).pipe(
		switchMap(({ payload }) => {
			const body = { ...payload, grantType: 'password' }
			return signInFetch(body);
		}),
		switchMap((res) => fromPromise(res.json())),
		tap(({ accessToken }) => {
			if (accessToken) {
				saveAccessToken(accessToken);
			}
		}),
		switchMap((res) => {
			if (res.error) return of(userInfo.signInError());
			return of(userInfo.signInSuccess(res));
		})
	);
};

export const signOutEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__SIGN_OUT).pipe(
		tap(() => {
			localStorage.removeItem(FIREBASE_ACCESS_TOKEN);
			localStorage.removeItem(USER_ACCESS_TOKEN);
			firebaseAuthRef.signOut();
		}),
		ignoreElements()
	);
};

// export const getUserInfoEpic = (action$, store) => {
// 	return action$.ofType(ACTIONS.USER__GET_INFO__REQUEST).pipe(
// 		switchMap(() => {
// 			const accessToken = getAccessTokenFromStore(store);
// 			if (!accessToken) return empty();
// 			return getUserInfoFetch(accessToken);
// 		}),
// 		switchMap((res) => fromPromise(res.json())),
// 		switchMap((res) => {
// 			const res$ = of(res);
// 			let fireBaseSignIn$ = of(null);
// 			if (res.error) {
// 				localStorage.removeItem(FIREBASE_ACCESS_TOKEN);
// 				localStorage.removeItem(USER_ACCESS_TOKEN);
// 				return combineLatest(res$, fireBaseSignIn$);
// 			} else {
// 				const fbtoken = localStorage.getItem(FIREBASE_ACCESS_TOKEN);
// 				firebaseAuthRef = firebaseAuth();
// 				fireBaseSignIn$ = fromPromise(firebaseAuthRef.signInWithCustomToken(fbtoken)).pipe(
// 					catchError((error) => of({ error })),
// 				);

// 			}
// 			return combineLatest(res$, fireBaseSignIn$);
// 		}),
// 		switchMap(createListOfUSerInfoActions)
// 	);
// };

export const forgotPasswordEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__FORGOT_PASSWORD__REQUEST).pipe(
		map(({ payload }) => {
			const resetClient = generateUrlToResetPassword(routes.RESET_PASSWORD);
			return { ...payload, resetClient };
		}),
		switchMap((body) => forgotPasswordFetch(body)),
		switchMap(({ status }) => {
			let nextUrl = routes.FORGOT_PASSWORD_SUCCESS;
			let action = userInfo.locationUpdate({ nextUrl });
			if (status !== 200) {
				nextUrl = routes.FORGOT_PASSWORD_ERROR;
				action = userInfo.locationUpdate({ nextUrl });
			}
			nextUrl = '';
			return of(action)
				.pipe(merge(of(userInfo.locationUpdate({ nextUrl }))));
		})
	);
};

export const resetPasswordEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__RESET_PASSWORD__REQUEST).pipe(
		switchMap(({ payload: { body, Authorization } }) => resetPasswordFetch(body, Authorization)),
		switchMap(({ status }) => {
			let nextUrl = routes.RESET_PASSWORD_SUCCESS;
			let action = userInfo.locationUpdate({ nextUrl });
			if (status !== 200) {
				nextUrl = routes.RESET_PASSWORD_ERROR;
				action = userInfo.locationUpdate({ nextUrl });
			}
			nextUrl = '';
			return of(action)
				.pipe(merge(of(userInfo.locationUpdate({ nextUrl }))));
		})
	);
};
