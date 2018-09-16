import { homeReducer } from "./home.reducer";
import { combineReducers } from "redux";
import { teamReducer } from "./team.reducer";
import { signInReducer } from "./sign-in.reducer";

export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}

export interface ITeamState {
  games: any,
  partialRender: string,
  roster: any,
  teamName: string,
}
export interface IHomeState {
  gameWeek: any
}

export interface IState {
  team: ITeamState,
  signIn: ISignInState,
  home: IHomeState
}

export const state = combineReducers<IState>({
  home: homeReducer,
  signIn: signInReducer,
  team: teamReducer
})