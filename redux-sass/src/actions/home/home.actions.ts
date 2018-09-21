export const homeTypes = {
    VIEW_PLAYS: 'VIEW_PLAYS',
    VIEW_STANDINGS: 'VIEW_STANDINGS',
    VIEW_WEEK: 'VIEW_WEEK'
}


export const fetchWeekSchedule = (weekNumber: number) => (dispatch: any) => {
    const getSchedule: any = fetch(`http://localhost:3001/season/week/${weekNumber}`);
    getSchedule
        .then((resp: any) => {
            return resp.json();
        })
        .then((respObj: any) => {
            const gameWeek = [];
            for (const game in respObj) {
                if (game && respObj) {
                    gameWeek.push(respObj[game])
                }
            }
            dispatch({
                payload: {
                    gameWeek
                },
                type: homeTypes.VIEW_WEEK,
            });
        })
        .catch((err: any) => {
            console.log(err)
        })
}
export const fetchDivStandings = (endPoint: string) => (dispatch: any) => {
    console.log(endPoint)
    const getStandings: any = fetch(`http://localhost:3001/season/standings/${endPoint}`);
    getStandings
        .then((resp: any) => {
            return resp.json();
        })
        .then((respObj: any) => {
            const divStandings = [];
            for (const div in respObj) {
                if (div && respObj) {
                    divStandings.push(respObj[div])
                }
            }
            dispatch({
                payload: {
                    divStandings
                },
                type: homeTypes.VIEW_STANDINGS,
            });
        })
        .catch((err: any) => {
            console.log(err)
        })
}
export const fetchGame = (gameId: string) => (dispatch: any) => {
    const getGame = fetch(`http://localhost:3001/season/${gameId}/plays`);
    getGame
        .then((resp: any) => {
            return resp.json();
        })
        .then((respObj: any) => {
            const plays = [];
            for (const play in respObj) {
                if (play && respObj) {
                    plays.push(respObj[play]);
                }
            }
            dispatch({
                payload: {
                    plays
                },
                type: homeTypes.VIEW_PLAYS,
            });
        })
        .catch((err: any) => {
            console.log(err)
        })
}

