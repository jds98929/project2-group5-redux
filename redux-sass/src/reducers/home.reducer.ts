import { IHomeState } from ".";
import { homeTypes } from "../actions/home/home.actions";


const initialState: IHomeState = {
    gameWeek: [],
}
export const homeReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case homeTypes.VIEW_WEEK:
            return {
                ...state,
                gameWeek: action.payload.gameWeek
            }
        default:
            return state;
    }
}