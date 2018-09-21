import { IHomeState } from ".";
import { homeTypes } from "../actions/home/home.actions";


const initialState: IHomeState = {
    divStandings: [],
    gameWeek: [],
    plays: []
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
        case homeTypes.VIEW_PLAYS:
            return{
                ...state,
                plays: action.payload.plays
            }
        default:
            return state;
    }
}