import * as React from 'react';

interface IProps {
    divStandings: any
}
export const LeagueStandingsComponent: React.StatelessComponent<IProps> = (props) => {
    const { divStandings } = props
    return (

        <table className="table table-sm table-striped table-dark col " id="standings">

            <tr>
                <th scope="col">Teams</th>
                <th scope="col">Win</th>
                <th scope="col">Losses</th>
                <th scope="col">Ties</th>
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