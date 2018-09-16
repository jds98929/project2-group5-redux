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
  awayName: any,
  awayPenalties: any,
  awayPossessionTime: any, 
  awaySafeties: any,
  awayScore: any,
  awayTotalYards: any, 
  awayTurnovers: any,  
  date: any,
  homeName: any,
  homePenalties: any,
  homePossessionTime: any, 
  homeSafeties: any,
  homeScore: any,
  homeTotalYards: any, 
  homeTurnovers: any,  
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