import * as React from "react";
interface IProps {
    gameWeek: any
}
export const LeagueScheduleComponent: React.StatelessComponent<IProps> = (props) => {
    const { gameWeek } = props;
    return (

        <table className="table table-sm table-striped table-dark col " id="schedule">

            <tr>
                <th scope="col">Teams</th>
                <th scope="col">Scores</th>
                <th scope="col">Broadcast</th>
                <th scope="col">Schedule</th>
            </tr>

            <tbody id="gameweek-table-body">
                {

                    gameWeek.map((game: any) => (
                        <tr key={game.id}>
                            <td>{game.home.alias} vs. {game.away.alias}</td>
                            <td>{game.scoring.home_points} - {game.scoring.away_points}</td>
                            <td>{game.broadcast.network}</td>
                            <td>{game.scheduled}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    )
}