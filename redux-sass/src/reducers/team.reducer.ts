import { ITeamState } from ".";
import { teamTypes } from "../actions/team/team.actions";


const initialState: ITeamState = {
    games: [],
    partialRender: '',
    roster: [],
    teamName: ''
}

export const teamReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case teamTypes.VIEW_SCHEDULE:
      return {
        ...state,
        games: action.payload.games,
        partialRender: action.payload.partialRender
      }

    case teamTypes.VIEW_ROSTER:
      return {
        ...state,
        partialRender: action.payload.partialRender,
        roster: action.payload.roster
      }
  }



  return state;

}