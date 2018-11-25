const PROTOCOL = 'https';

const api = `${PROTOCOL}://masterworklnu.azurewebsites.net/api`;

export default {
	localStorageKeys: {
		USER_ACCESS_TOKEN: 'USER_ACCESS_TOKEN',
		FIREBASE_ACCESS_TOKEN: 'FIREBASE_ACCESS_TOKEN',
		LANGUAGE: 'LANGUAGE',
	},
	api,
};
