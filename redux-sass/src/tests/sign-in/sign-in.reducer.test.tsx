import { signInReducer, initialState } from "../../reducers/sign-in.reducer";
import { signInTypes } from "../../actions/sign-in/sign-in.types";

describe('sign-in reducer', () => {
    it('should return the initial state', () => {
        expect(signInReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle UPDATE_USERNAME', () => {
        const startAction = {
            payload: {
                username: 'user123'
            },
            type: signInTypes.UPDATE_USERNAME
        };
        expect(signInReducer({ credentials: { username: 'user12', password: '' }, errorMessage: '' }, startAction))
            .toEqual({ credentials: { username: 'user123', password: '' }, errorMessage: '' });
    });

    it('should handle UPDATE_PASSWORD', () => {
        const startAction = {
            payload: {
                password: 'pass'
            },
            type: signInTypes.UPDATE_PASSWORD
        };
        expect(signInReducer({ credentials: { username: 'user123', password: 'pas' }, errorMessage: '' }, startAction))
            .toEqual({ credentials: { username: 'user123', password: 'pass' }, errorMessage: '' });
    })
})
