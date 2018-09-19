import * as React from 'react';

interface IProps {
    divStandings: any
}
export const LeagueStandingsComponent: React.StatelessComponent<IProps> = (props) => {
    const { divStandings } = props
    return (

        <table className="table table-sm table-striped table-dark table-bordered rounded-bottom col " id="standings">

            <tr>
                <th scope="col-1">Teams</th>
                <th scope="col-1">Win</th>
                <th scope="col-1">Losses</th>
                <th scope="col-1">Ties</th>
            </tr>

            <tbody id="standings-table-body">
                {
                    divStandings.map((div: any) => (
                        <tr key={div.id}>
                            <td>{div.name}</td>
                            <td>{div.wins}</td>
                            <td>{div.losses}</td>
                            <td>{div.ties}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}