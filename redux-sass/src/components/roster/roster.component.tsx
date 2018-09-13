import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  players: any
}

export const RosterComponent: React.StatelessComponent<IProps> = (props) => {
    const {players} = props
    return (
      <table className="table table-striped table-dark col" id="movie-table">
      <tbody id="movie-table-body">
        {
          players.map((player: any) => (
            <tr key="1">
              <td><Link to="/team">{player.firstName} {player.lastName}</Link></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    )
}
