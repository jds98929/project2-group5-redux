import * as React from 'react';

interface IProps {
  awayName: any,
  awayPenalties: any,
  awayPossessionTime: any, 
  awaySafeties: any,
  awayScore: any,
  awayTotalYards: any, 
  awayTurnovers: any,  
  date: any,
  homeName: any,
  homePenalties: any,
  homePossessionTime: any, 
  homeSafeties: any,
  homeScore: any,
  homeTotalYards: any, 
  homeTurnovers: any,  
}

export const ScheduleComponent: React.StatelessComponent<IProps> = (props) =>{
    const { awayName,
      awayPenalties,
      awayPossessionTime, 
      awaySafeties,
      awayScore,
      awayTotalYards, 
      awayTurnovers,  
      date,
      homeName,
      homePenalties,
      homePossessionTime, 
      homeSafeties,
      homeScore,
      homeTotalYards, 
      homeTurnovers  } = props;
      
    const setTime = (hour: number) => {
      if (hour > 12) {
        hour -= 12;
      }
      return hour.toString();
    }

    return (
      <div>
      <table className="table table-striped table-dark col">
      <tbody id="movie-table-body">
        <tr key="1">
          <td> {homeName && homeName} </td>
          <td> {homeScore && homeScore}-{awayScore && awayScore} </td>       
          <td> {awayName && awayName} </td>
          <td> 
            {date && date.substring(0,10)} 
            {date && setTime(+date.substring(11,13))} 
            {date && date.substring(13, 16)} PM
          </td>
        </tr>
        </tbody>
      </table>
      <table className="table table-striped table-dark col">
        <tr> 
          <td></td>
          <td>{homeName}</td>
          <td>{awayName}</td>
        </tr>
        <tbody>
        <tr>
          <td> Penalties </td>
          <td> {homePenalties && homePenalties} </td>
          <td> {awayPenalties && awayPenalties} </td>
        </tr>
        <tr>
          <td> Possession Time </td>
          <td> {homePossessionTime && homePossessionTime} </td>
          <td> {awayPossessionTime && awayPossessionTime} </td>
        </tr>
        <tr>
          <td> Safeties </td>
          <td> {homeSafeties && homeSafeties} </td>
          <td> {awaySafeties && awaySafeties} </td>
        </tr>
        <tr>
          <td> Total Yards </td>
          <td> {homeTotalYards && homeTotalYards} </td>
          <td> {awayTotalYards && awayTotalYards} </td>
        </tr>
        <tr>
          <td> Turnovers </td>
          <td> {homeTurnovers && homeTurnovers} </td>
          <td> {awayTurnovers && awayTurnovers} </td>
        </tr>
       </tbody>
      </table>
      </div>
    )
}

