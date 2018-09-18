import { IHomeState } from ".";
import { homeTypes } from "../actions/home/home.actions";


const initialState: IHomeState = {
    divStandings: [],
    gameWeek: [],
}
export const homeReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case homeTypes.VIEW_WEEK:
            return {
                ...state,
                gameWeek: action.payload.gameWeek
            }
        case homeTypes.VIEW_STANDINGS:
            return {
                ...state,
                divStandings: action.payload.divStandings
            }
        default:
            return state;
    }
}