// import pages
import Login from './Auth/_pages/Login';
import Register from './Auth/_pages/Register';
import Chat from './Chat/_pages/Chat';

// import reducers
import AuthReducer from './Auth/_store/AuthReducer';
import ChatReducer from './Chat/_store/ChatReducer';

export {
    // pages
    Login,
    Register,
    Chat,

    // reducers
    AuthReducer,
    ChatReducer
};