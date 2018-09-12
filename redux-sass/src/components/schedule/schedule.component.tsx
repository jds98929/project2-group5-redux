import * as React from 'react';

interface IProps {
  games: any
}

export const ScheduleComponent: React.StatelessComponent<IProps> = (props) => {
  const {games} = props;
  return (
    <table className="table table-striped table-dark col" id="movie-table">
    <tbody id="movie-table-body">
      {
        games.map((game: any) => (
          <tr key={game.team1}>
            <td>{game.team2}</td>
            <td>{game.score}</td>
            <td>{game.date}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
  )
}