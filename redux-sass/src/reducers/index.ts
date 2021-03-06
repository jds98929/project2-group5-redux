import { homeReducer } from "./home.reducer";
import { combineReducers } from "redux";
import { playerReducer } from "./player.reducer";
import { teamReducer } from "./team.reducer";
import { signInReducer } from "./sign-in.reducer";
import { registerReducer } from "./register.reducer";



export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}
export interface IPlayerState {
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
  awayFumbles: any,
  awayName: any,
  awayPenalties: any,
  awayPossessionTime: any,
  awaySafeties: any,
  awayScore: any,
  awayTotalYards: any,
  awayTurnovers: any,
  broadcast: any,
  date: any,
  homeFumbles: any,
  homeName: any,
  homePenalties: any,
  homePossessionTime: any,
  homeSafeties: any,
  homeScore: any,
  homeTotalYards: any,
  homeTurnovers: any,
  oldTeamName: any,
  partialRender: string,
  roster: any,
  teamName: any,
  weekNum: number,
  alias: any,
}
export interface IHomeState {
  divStandings: any,
  gameWeek: any,
  plays: any
}
export interface IRegisterState {
  userInfo: {
    firstName: string,
    lastName: string,
    username: string,
    password: string
  },
  errorMessage: string
}
export interface IState {
  home: IHomeState,
  team: ITeamState,
  register: IRegisterState,
  signIn: ISignInState,
  player: IPlayerState
}

export const state = combineReducers<IState>({
  home: homeReducer,
  player: playerReducer,
  register: registerReducer,
  signIn: signInReducer,
  team: teamReducer
})