import { combineReducers } from 'redux';

import {
	AuthReducer,
	ChatReducer
} from '../modules';

export default combineReducers({
	auth: AuthReducer,
	chat: ChatReducer
});
