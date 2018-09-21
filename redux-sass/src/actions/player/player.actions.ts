export const playerTypes = {
    VIEW_PLAYER: 'VIEW_PLAYER',
  }
  
  export const fetchPlayer = (id:any)=>(dispatch: any) => {
    const getPlayer: any = fetch(`http://localhost:3001/season/player/${id}`);
    getPlayer
      .then((resp: any) => {
        return resp.json();
      })
      .then((respObj: any) => {
        dispatch({
          payload: {
            birth_date: respObj.birth_date,
            birth_place: respObj.birth_place,
            college: respObj.college, 
            height: respObj.height,
            jersey: respObj.jersey,
            name: respObj.name,
            position: respObj.position,     
            rookie_year: respObj.rookie_year,
            seasons: respObj.seasons, 
            weight: respObj.weight
          },
          type: playerTypes.VIEW_PLAYER,
        });
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  