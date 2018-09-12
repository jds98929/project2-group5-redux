export const teamTypes = {
  VIEW_ROSTER: 'VIEW_ROSTER',
  VIEW_SCHEDULE: 'VIEW_SCHEDULE',
}

export const fetchSchedule = () => (dispatch: any) => {
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

    export const fetchRoster = () => (dispatch: any) => {
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