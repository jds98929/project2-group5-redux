import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  games: any
}

export const ScheduleComponent: React.StatelessComponent<IProps> = (props) =>{
    const {games} = props
    return (
      <table className="table table-striped table-dark col" id="movie-table">
      <tbody id="movie-table-body">
        {
          games.map((game: any) => (
            <tr key="1">
             <td><Link to="/team">{game.team1} {game.team2} {game.score} {game.date}</Link></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    )
}

