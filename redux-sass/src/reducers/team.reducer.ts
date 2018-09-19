import { ITeamState } from ".";
import { teamTypes } from "../actions/team/team.actions";


const initialState: ITeamState = {
    alias: '',
    awayFumbles: '',
    awayName: '',
    awayPenalties: '',
    awayPossessionTime: '', 
    awaySafeties: '',
    awayScore: '',
    awayTotalYards: '', 
    awayTurnovers: '',  
    date: '',
    homeFumbles: '',
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
    teamName: '',
    weekNum: 1
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
        awayFumbles: action.payload.awayFumbles,
        awayName: action.payload.awayName,
        awayPenalties: action.payload.awayPenalties,
        awayPossessionTime: action.payload.awayPossessionTime, 
        awaySafeties: action.payload.awaySafeties,
        awayScore: action.payload.awayScore,
        awayTotalYards: action.payload.awayTotalYards, 
        awayTurnovers: action.payload.awayTurnovers,  
        date: action.payload.date,
        homeFumbles: action.payload.homeFumbles,
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
    
    case teamTypes.UPDATE_WEEK:
      return {
        ...state,
        weekNum: action.payload.weekNum
      }
  }

  return state;

}