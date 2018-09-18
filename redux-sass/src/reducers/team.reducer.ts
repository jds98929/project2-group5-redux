import { ITeamState } from ".";
import { teamTypes } from "../actions/team/team.actions";


const initialState: ITeamState = {
    alias: '',
    awayName: '',
    awayPenalties: '',
    awayPossessionTime: '', 
    awaySafeties: '',
    awayScore: '',
    awayTotalYards: '', 
    awayTurnovers: '',  
    date: '',
    homeName: '',
    homePenalties: '',
    homePossessionTime: '', 
    homeSafeties: '',
    homeScore: '',
    homeTotalYards: '', 
    homeTurnovers: '',  
    oldTeamName: '',
    partialRender: 'schedule',
    roster: [],
    teamName: ''
}

export const teamReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case teamTypes.UPDATE_RENDER:
      return {
        ...state,
        partialRender: action.payload.partialRender
      }

    case teamTypes.UPDATE_TEAM:
      return {
        ...state,
        alias: action.payload.alias,
        oldTeamName: action.payload.oldTeamName,
        teamName: action.payload.teamName
      }

    case teamTypes.VIEW_SCHEDULE:
      return {
        ...state,
        awayName: action.payload.awayName,
        awayPenalties: action.payload.awayPenalties,
        awayPossessionTime: action.payload.awayPossessionTime, 
        awaySafeties: action.payload.awaySafeties,
        awayScore: action.payload.awayScore,
        awayTotalYards: action.payload.awayTotalYards, 
        awayTurnovers: action.payload.awayTurnovers,  
        date: action.payload.date,
        homeName: action.payload.homeName,
        homePenalties: action.payload.homePenalties,
        homePossessionTime: action.payload.homePossessionTime, 
        homeSafeties: action.payload.homeSafeties,
        homeScore: action.payload.homeScore,
        homeTotalYards: action.payload.homeTotalYards, 
        homeTurnovers: action.payload.homeTurnovers,  
      }

    case teamTypes.VIEW_ROSTER:
      return {
        ...state,
        roster: action.payload.roster
      }
  }

  return state;

}