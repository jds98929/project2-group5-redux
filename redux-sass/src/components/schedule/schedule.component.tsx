import * as React from 'react';

interface IProps {
  awayName: any,
  awayPenalties: any,
  awayPossessionTime: any, 
  awaySafeties: any,
  awayScore: any,
  awayTotalYards: any, 
  awayTurnovers: any,  
  broadcast: any,
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
      broadcast,
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
      if (hour === 0){
        hour = 12;
      }
      return hour.toString();
    }

    return (
      <div>
        {homeName ?
        <div>
        <div className="card text-white bg-primary mb-3" >
          <div className="card-header">{date && date.substring(0,10)} <span id="broadcast-text" className="float-right">{broadcast && broadcast}</span><br/> {date && setTime(+date.substring(11,13))} {date && date.substring(13, 16)} PM </div>
            <div className="card-body">
            <p className="card-text">{homeScore ? 'Final' : ''}</p>
            <span className="card-text center-text">(home)</span>
            <h5 className="card-title">{homeName ? <img 
                  src={require("../../assets/" + homeName.split(" ")[homeName.split(" ").length-1].toLowerCase() + ".gif")}
                  height="60"/> : ''} {homeName && homeName} <span className="right-text float-right">{homeScore && homeScore}</span></h5>
            <span className="card-text center-text">(away)</span>
            <h5 className="card-title">{awayName ? <img 
                  src={require("../../assets/" + awayName.split(" ")[awayName.split(" ").length-1].toLowerCase() + ".gif")}
                  height="60"/> : ''} {awayName && awayName} <span className="right-text float-right">{awayScore && awayScore}</span></h5>
            
          </div>
        </div> 
        <div>{homeScore ?
        <table className="table game-table">
        <thead className="thead-dark">
          <tr className="text-center">
            <h4 id="game-statistics" className="h4 font-weight-normal float-center">Game Statistics</h4>
          </tr>
          <tr> 
            <td></td>
            <td>{homeName}</td>
            <td>{awayName}</td>
          </tr>
        </thead>
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
        :
        '' }
      </div>
      </div>
      : ''}
      </div>
    )
}

