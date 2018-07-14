import {EMAIL_CHANGED, PASSWORD_CHANGED} from './AuthActionTypes';

export const emailChanged = payload => ({
    type: EMAIL_CHANGED,
    payload
});

export const passwordChanged = payload => ({
    type: PASSWORD_CHANGED,
    payload
});