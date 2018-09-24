import * as React from "react";
interface IProps {
    gameWeek: any,
    fetchGame: (gameId: string) => any
}
export const LeagueScheduleComponent: React.StatelessComponent<IProps> = (props) => {
    const { gameWeek } = props;

    gameWeek.forEach((game: any)=>{
        console.log(game);
    })
    const setTime = (date: any) => {

        const year = +date.substring(0, 4);
        const month = +date.substring(5, 7);
        let day = +date.substring(8, 10);
        let hour = +date.substring(11, 13) - 4;
        const min = date.substring(13, 16)
        if (hour < 0) {
            day -= 1;
            hour += 12;
        }
        else {
            hour -= 12;
        }
        if (hour < 0) {
            hour += 12;
            return `${month}/${day}/${year}  ${hour}${min} AM`;
        }
        const timeString = `${month}/${day}/${year}  ${hour}${min} PM`

        return timeString;
    }

    return (
        <table className="league-table table table-dark table-sm table-striped table-condensed" id="schedule">
            <tbody id="gameweek-table-body">
                {
                    gameWeek.map((game: any) => (
                        game &&
                        <tr key={game.id} id="schedule-row">
                            <td>@{game.home.alias} vs. {game.away.alias}</td>
                            <td>{game.broadcast.network}</td>
                            <td>{setTime(game.scheduled)}</td>
                            <td><button value={game.id} className="btn btn-info btn-sm" onClick={
                                (event) => {
                                    event.preventDefault();
                                    console.log(game.id);
                                    props.fetchGame(game.id);
                                }
                            }>Click for Game Feed</button></td>
                        </tr>
                        
                    ))
                }
            </tbody>
        </table>
    )
}