import { ITeamState } from ".";
import { teamTypes } from "../actions/team/team.actions";


const initialState: ITeamState = {
    games: [],
    partialRender: '',
    players: [],
    teamName: 'Raiders'
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
        players: action.payload.players
      }
  }



  return state;

}