import * as React from 'react';
interface IProps {
  roster: any
}

export const RosterComponent: React.StatelessComponent<IProps> = (props) => {
    const {roster} = props
    console.log(roster);  
    return (
      <table className="table table-striped table-dark col" id="roster-table">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Position</th>
        <th>Number</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Birthdate</th>
        <th>Rookie Year</th>
     </tr>
      <tbody id="roster-table-body">
        {
          roster && roster.map((player: any) => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>{player.age}</td>
              <td>{player.position}</td>
              <td>{player.jersey}</td>
              <td>{player.height}</td>
              <td>{player.weight}</td>
              <td>{player.birth_date}</td>
              <td>{player.rookie_year}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    )
}
