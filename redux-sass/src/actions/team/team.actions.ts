export const teamTypes = {
  VIEW_ROSTER: 'VIEW_ROSTER',
  VIEW_SCHEDULE: 'VIEW_SCHEDULE',
}

export const fetchSchedule = () => {

  return {
    payload: {
      games: [{ date: '06/03/2018', score: '21-7', team1: 'Raiders', team2: 'Ravens' },
      { date: '07/20/2018', score: '18-46', team1: 'Falcons', team2: 'Patriots' }],
      partialRender: 'schedule'
    },
    type: teamTypes.VIEW_SCHEDULE
  }

  /*{const getSchedule: any = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  getSchedule
    .then((resp: any) => {
      return resp.json();
    })
    .then((respObj: any) => {
      const games = [];
      for(const game in respObj.games) {
        if (game && respObj.games[game]) {
          games.push(game);
        }
      }
      dispatch({
        payload: {
          partialRender: () => {return (<Schedule games={games}/>)}
          }
        },
       type: teamTypes.VIEW_SCHEDULE,

      });
    })
    .catch((err: any) => {
      console.log(err);
    })}*/
}

export const fetchRoster = (alias: any, weekNum: any) => (dispatch: any) => {
  const getRoster: any = fetch(`http://localhost:8080/season/${alias}/${weekNum}/roster`);
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
          roster
        },
        type: teamTypes.VIEW_ROSTER,
      });
    })
    .catch((err: any) => {
      console.log(err);
    });
}
