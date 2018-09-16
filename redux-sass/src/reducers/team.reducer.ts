import { ITeamState } from ".";
import { teamTypes } from "../actions/team/team.actions";


const initialState: ITeamState = {
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
    partialRender: '',
    roster: [],
    teamName: '',
}

export const teamReducer = (state = initialState, action: any) => {
  switch (action.type) {
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
        partialRender: action.payload.partialRender,
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