import { IPlayerState } from ".";
import { playerTypes } from "../actions/player/player.actions";


const initialState: IPlayerState = {
    birth_date: '',
    birth_place: '',
    college: '', 
    height: '',
    jersey: '',
    name: '',
    partialRender: '',
    position: '',     
    rookie_year: '',
    seasons: [], 
    weight: ''
}

export const playerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case playerTypes.VIEW_PLAYER:
      return {
        ...state,
        birth_date: action.payload.birth_date,
        birth_place: action.payload.birth_place,
        college: action.payload.college, 
        height: action.payload.height,
        jersey: action.payload.jersey,
        name: action.payload.name,
        position: action.payload.position,     
        rookie_year: action.payload.rookie_year,
        seasons: action.payload.seasons, 
        weight: action.payload.weight
      }
  }
  return state;
}