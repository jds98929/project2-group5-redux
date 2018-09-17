export const homeTypes = {
    VIEW_WEEK: 'VIEW_WEEK',
}


export const fetchWeekSchedule = () => (dispatch: any) => {
    const getSchedule: any = fetch(`http://localhost:3001/season/week/1`);
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
            console.log(gameWeek)
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

