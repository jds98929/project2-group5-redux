import { homeReducer } from "./home.reducer";
import { combineReducers } from "redux";
import {playerReducer} from "./player.reducer";
import { teamReducer } from "./team.reducer";
import { signInReducer } from "./sign-in.reducer";


export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}
export interface IPlayerState{
  birth_date: any,
  birth_place: any,
  college: any, 
  height: any,
  jersey: any,
  name: any,
  partialRender: string,
  position: any,     
  rookie_year: any,
  seasons: any, 
  weight: any
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
}
export interface IHomeState {
  gameWeek: any
}

export interface IState {
  home: IHomeState,
  team: ITeamState,
  signIn: ISignInState,
  player: IPlayerState
}

export const state = combineReducers<IState>({
  home: homeReducer,
  player: playerReducer,
  signIn: signInReducer,
  team: teamReducer
})