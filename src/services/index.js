import Axios from 'axios';

export const axios = Axios.create({
	baseURL: 'http://192.168.8.103:5000',

	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	}
});




// Intercept each request and set the bearer token for user
axios.interceptors.request.use( async config => {
	let apiToken = await localStorage.getItem('api_token');

	if (apiToken && !config.headers.common.Authorization) {
		config.headers.common.Authorization = `Bearer ${apiToken}`;
	}

	return config;
});

