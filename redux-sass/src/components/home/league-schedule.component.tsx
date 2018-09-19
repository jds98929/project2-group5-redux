import * as React from "react";
interface IProps {
    gameWeek: any
}
export const LeagueScheduleComponent: React.StatelessComponent<IProps> = (props) => {
    const { gameWeek } = props;

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
        const timeString = `${month}/${day}/${year}  ${hour}${min} PM`

        return timeString;
    }
    // const checkNull = (nullOrNot: any) => {
    //     if (!nullOrNot){
    //         return ` `;
    //     } else {
    //         return nullOrNot;
    //     }
    // }
    return (

        <table className="table table-sm table-striped table-dark col " id="schedule">

            <tbody id="gameweek-table-body">
                {
                    gameWeek.map((game: any) => (
                        <tr key={game.id}>
                            <td>@{game.home.alias} vs. {game.away.alias}</td>
                            <td>{game.broadcast.network}</td>
                            <td>{setTime(game.scheduled)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}