export const teamTypes = {
  VIEW_ROSTER: 'VIEW_ROSTER',
  VIEW_SCHEDULE: 'VIEW_SCHEDULE',
}


export const fetchSchedule = (alias:any,weekNum:any)=>(dispatch: any) => {
  const getSchedule: any = fetch(`http://localhost:3001/season/${alias}/${weekNum}/schedule`);
  getSchedule
    .then((resp: any) => {
      return resp.json();
    })
    .then((respObj: any) => {
      dispatch({
        payload: {
          awayName: respObj.g.away.name,
          awayPenalties: respObj.gs.statistics.away.summary.penalties,
          awayPossessionTime: respObj.gs.statistics.away.summary.possession_time, 
          awaySafeties: respObj.gs.statistics.away.summary.safeties,
          awayScore: respObj.g.scoring.away_points,
          awayTotalYards: respObj.gs.statistics.away.summary.total_yards, 
          awayTurnovers: respObj.gs.statistics.away.summary.turnovers,  
          date: respObj.g.scheduled,
          fumbles: respObj.gs.statistics.home.summary.fumbles,
          homeName: respObj.g.home.name,
          homePenalties: respObj.gs.statistics.home.summary.penalties,
          homePossessionTime: respObj.gs.statistics.home.summary.possession_time, 
          homeSafeties: respObj.gs.statistics.home.summary.safeties,
          homeScore: respObj.g.scoring.home_points,
          homeTotalYards: respObj.gs.statistics.home.summary.total_yards, 
          homeTurnovers: respObj.gs.statistics.home.summary.turnovers,  
          partialRender: 'schedule',
        },
        type: teamTypes.VIEW_SCHEDULE,
      });
    })
    .catch((err: any) => {
      console.log(err);
    });
}

export const fetchRoster = (alias:any,weekNum:any)=>(dispatch: any) => {
  const getRoster: any = fetch(`http://localhost:3001/season/${alias}/${weekNum}/roster`);
  getRoster
    .then((resp: any) => {
      return resp.json();
    })
    .then((respObj: any) => {
      const roster = [];
      console.log(`resp body:  ${respObj[0].name}`)
      for (const player in respObj) {
        if (player && respObj) {
          roster.push(respObj[player]);
        }
      }
      console.log(roster);
      dispatch({
        payload: {
          partialRender: 'roster',
          roster
        },
        type: teamTypes.VIEW_ROSTER,
      });
    })
    .catch((err: any) => {
      console.log(err);
    });
}
