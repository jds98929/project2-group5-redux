import { combineReducers } from "redux";
import { teamReducer } from "./team.reducer";


export interface ITeamState {
  teamName: string,
  partialRender: () => any
}


export interface IState {
  team: ITeamState
}

export const state = combineReducers<IState>({
  team: teamReducer
})