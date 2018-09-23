import { environment } from '../../environment';

export const teamTypes = {
  UPDATE_RENDER: 'UPDATE_RENDER',
  UPDATE_TEAM: 'UPDATE_TEAM',
  UPDATE_WEEK: 'UPDATE_WEEK',
  VIEW_ROSTER: 'VIEW_ROSTER',
  VIEW_SCHEDULE: 'VIEW_SCHEDULE',
}

export const fetchSchedule = (alias:any, weekNum:any) => (dispatch: any) => {
  const getSchedule: any = fetch(environment.context + `season/${alias}/${weekNum}/schedule`);
  getSchedule
    .then((resp: any) => {
      return resp.json();
    })
    .then((respObj: any) => {
      let awayFumblesTemp = '';
      let awayPenaltiesTemp = '';
      let awayPossessionTimeTemp = '';
      let awaySafetiesTemp = '';
      let awayScoreTemp = '';
      let awayTotalYardsTemp = '';
      let awayTurnoversTemp = '';
      let homeFumblesTemp = '';
      let homePenaltiesTemp = '';
      let homePossessionTimeTemp = '';
      let homeSafetiesTemp = '';
      let homeScoreTemp = '';
      let homeTotalYardsTemp = '';
      let homeTurnoversTemp = '';


      if (respObj.gs.statistics) {
        awayFumblesTemp = respObj.gs.statistics.away.summary.fumbles;
        awayPenaltiesTemp = respObj.gs.statistics.away.summary.penalties;
        awayPossessionTimeTemp = respObj.gs.statistics.away.summary.possession_time;
        awaySafetiesTemp = respObj.gs.statistics.away.summary.safeties;
        awayScoreTemp = respObj.g.scoring.away_points;
        awayTotalYardsTemp = respObj.gs.statistics.away.summary.total_yards;
        awayTurnoversTemp = respObj.gs.statistics.away.summary.turnovers; 
        homeFumblesTemp = respObj.gs.statistics.home.summary.fumbles;
        homePenaltiesTemp = respObj.gs.statistics.home.summary.penalties;
        homePossessionTimeTemp = respObj.gs.statistics.home.summary.possession_time;
        homeSafetiesTemp = respObj.gs.statistics.home.summary.safeties;
        homeScoreTemp = respObj.g.scoring.home_points;
        homeTotalYardsTemp = respObj.gs.statistics.home.summary.total_yards;
        homeTurnoversTemp = respObj.gs.statistics.home.summary.turnovers; 
      }

      dispatch({
        payload: {
          awayFumbles: awayFumblesTemp,
          awayId: respObj.g.away.id,
          awayName: respObj.g.away.name,
          awayPenalties: awayPenaltiesTemp,
          awayPossessionTime: awayPossessionTimeTemp,
          awaySafeties: awaySafetiesTemp,
          awayScore: awayScoreTemp,
          awayTotalYards: awayTotalYardsTemp,
          awayTurnovers: awayTurnoversTemp,  
          broadcast: respObj.g.broadcast.network,
          date: respObj.g.scheduled,
          homeFumbles: homeFumblesTemp,
          homeId: respObj.g.home.id,
          homeName: respObj.g.home.name,
          homePenalties: homePenaltiesTemp,
          homePossessionTime: homePossessionTimeTemp,
          homeSafeties: homeSafetiesTemp,
          homeScore: homeScoreTemp,
          homeTotalYards: homeTotalYardsTemp,
          homeTurnovers: homeTurnoversTemp  
          
        },
        type: teamTypes.VIEW_SCHEDULE,
      });
    })
    .catch((err: any) => {
      console.log(err);
    });

}


export const fetchRoster = (alias:any,weekNum:any)=>(dispatch: any) => {
  const getRoster: any = fetch(environment.context + `season/${alias}/${weekNum}/roster`);
  getRoster
    .then((resp: any) => {
      return resp.json();
    })
    .then((respObj: any) => {
      const roster: string[] = [];
      if (respObj) {
        for (const player in respObj) {
          if (player) {
            roster.push(respObj[player]);
          }
        } 
      }
      dispatch({
        payload: {
          roster
        },
        type: teamTypes.VIEW_ROSTER,
      });
    })
    .catch((err: any) => {
      if (err.name === 'SyntaxError'){
        const roster: string[] = [];
        roster.push('This week\'s roster is not available yet')
        dispatch({
          payload: {
            roster
          },
          type: teamTypes.VIEW_ROSTER,
        });
      }
      else {
        console.log(err);
      }
    });
}

export const updateRender = (event: any) => {
  if (event.target.id === 'schedule') {
    return {
      payload: {
        partialRender: 'schedule',
      },
      type: teamTypes.UPDATE_RENDER
    }
  }
  else {
    return {
      payload: {
        partialRender: 'roster',
      },
      type: teamTypes.UPDATE_RENDER
    }
  }
}

export const updateTeamInfo = (oldName: string, event: any) => {
  let abbrev = '';
  if (event.target.value !== 'none'){
    const newName = event.target.value;
    const userString: any = localStorage.getItem('user')
    const user = JSON.parse(userString);
    user.teams.forEach((team:any) => {
      if (team.name === newName) {
        abbrev = team.alias;
      }
    });
    return {
      payload: {
        alias: abbrev,
        oldTeamName: oldName,
        teamName: newName,
      },
      type: teamTypes.UPDATE_TEAM
    }
  }
  return;
}

export const updateWeek = (event:any, oldWeek: number) => {
  if (event.target.value === 'back') {
    return{
      payload: {
        weekNum: oldWeek - 1
      }, type: teamTypes.UPDATE_WEEK
    }
  }
  else if (event.target.value === 'forward') {
    if (oldWeek === 17) {
      return;
    }
    return{
      payload: {
        weekNum: oldWeek + 1
      }, type: teamTypes.UPDATE_WEEK
    }
  }
  return;
}


