import * as React from 'react';
import { Link } from 'react-router-dom'
interface IProps {
  roster: any
}

export const RosterComponent: React.StatelessComponent<IProps> = (props) => {
    const {roster} = props  
    return (
      roster[0] !== 'This week\'s roster is not available yet' ?
      <table className="table table-striped table-dark col">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Position</th>
        <th scope="col">Number</th>
        <th scope="col">Height</th>
        <th scope="col">Weight</th>
        <th scope="col">Birthdate</th>
        <th scope="col">Rookie Year</th>
        <th scope="col">School</th>
        <th scope="col">Status</th>

     </tr>
      <tbody>
          {roster.map((player: any) => (
            <tr key={player.name}>
              <td><Link to={`/player/`} id={player.id} onClick ={(event)=>{localStorage.setItem('id',player.id)}}> {player.name}</Link></td>
             
              <td>{player.age}</td>
              <td>{player.position}</td>
              <td>{player.jersey}</td>
              <td>{player.height}</td>
              <td>{player.weight}</td>
              <td>{player.birth_date}</td>
              <td>{player.rookie_year}</td>
              <td>{player.college}</td>
              <td>{player.status}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    :
    roster
    )
}
