import * as React from 'react';
import { Link } from 'react-router-dom'
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
        <th>School</th>
        <th>Status</th>

     </tr>
      <tbody id="roster-table-body">
        {
          roster && roster.map((player: any) => (
            <tr key={player.name}>
              <td><Link to={`/player/`} id={player.id} onClick ={(event)=>{localStorage.setItem('id',player.id)}}> {player.name}</Link></td>
             
              <td><Link to="/player">{player.age}</Link></td>
              <td><Link to="/player">{player.position}</Link></td>
              <td><Link to="/player">{player.jersey}</Link></td>
              <td><Link to="/player">{player.height}</Link></td>
              <td><Link to="/player">{player.weight}</Link></td>
              <td><Link to="/player">{player.birth_date}</Link></td>
              <td><Link to="/player">{player.rookie_year}</Link></td>
              <td><Link to="/player">{player.college}</Link></td>
              <td><Link to="/player">{player.status}</Link></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    )
}
