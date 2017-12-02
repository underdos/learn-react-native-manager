import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED
} from '../actions/types';
const INITIAL_STATE = { email: '', password: '', user: null, loading: false,  error: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case USER_LOGIN:
            return { ...state, loading: true, error: '' };
        case USER_LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case USER_LOGIN_FAILED:
            return { ...state,  password: '', loading: false, error: 'Authentication Failed.! '+action.payload.message };
        default:
            return state;
    }
} 