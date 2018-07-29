// import pages
import Login from './Auth/_pages/Login';
import Register from './Auth/_pages/Register';
import Home from './Auth/_pages/Home';
import Chat from './Chat/_pages/Chat';

// import reducers
import AuthReducer from './Auth/_store/AuthReducer';
import ChatReducer from './Chat/_store/ChatReducer';

export {
    // pages
    Login,
    Register,
    Home,
    Chat,

    // reducers
    AuthReducer,
    ChatReducer
};