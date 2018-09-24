import { IRegisterState } from ".";
import { registerTypes } from "../actions/register-new-user/register.actions";

const initialState: IRegisterState = {
    userInfo: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    },
    errorMessage: ''
}

export const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case registerTypes.ERROR_MESSAGE:
        return {
            ...state,
            erorMessage: action.payload.errorMessage
        }
        case registerTypes.CREATE_FIRSTNAME:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    firstName: action.payload.firstName
                }
            }
        case registerTypes.CREATE_LASTNAME:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    lastName: action.payload.lastName
                }
            }
        case registerTypes.CREATE_USERNAME:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    username: action.payload.username
                }
            }
        case registerTypes.CREATE_PASSWORD:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    password: action.payload.password
                }
            }
    }
    return state;
}