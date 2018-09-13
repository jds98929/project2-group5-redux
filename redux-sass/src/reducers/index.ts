import { combineReducers } from "redux";
import { teamReducer } from "./team.reducer";


export interface ITeamState {
  games: any,
  partialRender: string,
  players: any,
  teamName: string,
}


export interface IState {
  team: ITeamState
}

export const state = combineReducers<IState>({
  team: teamReducer
})