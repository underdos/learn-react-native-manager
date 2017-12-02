import firebase from 'firebase';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED
} from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({
            type: USER_LOGIN
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                loginUserFail(dispatch, error)
                // firebase.auth().createUserWithEmailAndPassword(email, password)
                //     .then(user => loginUserSuccess(dispatch, user))
                //     .catch(error => loginUserFail(dispatch, error))
            });
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ 
        type: USER_LOGIN_SUCCESS, 
        payload: user 
    });

    Actions.main();
}

const loginUserFail = (dispatch, error) => {
    dispatch({
        type: USER_LOGIN_FAILED,
        payload: error
    });
}