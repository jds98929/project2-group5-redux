export const teamTypes = {
  VIEW_ROSTER: 'VIEW_ROSTER',
  VIEW_SCHEDULE: 'VIEW_SCHEDULE',
}

export const fetchSchedule = () => {
  
  return {
    payload: {
      games: [{date: '06/03/2018', score: '21-7', team1: 'Raiders', team2: 'Ravens'},
              {date: '07/20/2018', score: '18-46', team1: 'Falcons', team2: 'Patriots'}],
      partialRender: 'schedule'
    },
    type: teamTypes.VIEW_SCHEDULE
  }

  {/*const getSchedule: any = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
    })*/}
  }

export const fetchRoster = () => {
  return{
    payload: {
      partialRender: 'Roster',
      players:  [{firstName: 'Joe', lastName: 'Montana'}],
    },
    type: teamTypes.VIEW_ROSTER
  }
  {/*const getRoster: any = fetch(`https://pokeapi.co/api/v2/pokemon/`);
  getRoster
    .then((resp: any) => {
      return resp.json();
    })
    .then((respObj: any) => {
      const players = [];
      for(const player in respObj.players) {
        if (player && respObj.players[player]) {
          players.push(player);
        }
      }
      dispatch({
        payload: {
          pokemon: {
            name: respObj.name,
            sprites
          }
        },
       type: teamTypes.VIEW_ROSTER,

      });
    })
    .catch((err: any) => {
      console.log(err);
    })*/}
}