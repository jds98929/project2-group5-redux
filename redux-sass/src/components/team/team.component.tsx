import * as React from 'react';
import { IState, ITeamState } from '../../reducers';
import { connect } from 'react-redux';
import { fetchSchedule, fetchRoster } from '../../actions/team/team.actions';
import { ScheduleComponent } from '../schedule/schedule.component';
import { RosterComponent } from '../roster/roster.component';


 
interface IProps extends ITeamState {
  fetchSchedule: (alias: any, weekNum: any) => any,
  fetchRoster:(alias : any, weekNum : any) => any,
}

export class TeamComponent extends React.Component<IProps, any> {
  public render() {
    const { awayName, awayPenalties, awayPossessionTime, awaySafeties, awayTotalYards, awayTurnovers, awayScore, date, homeName, homeScore, homePenalties, homePossessionTime,
      homeSafeties, roster, teamName, homeTotalYards, homeTurnovers, partialRender } = this.props;
    return (
      <div>
        <h3>{teamName}</h3>
        <button className="btn btn-primary" onClick={(event: any) => { 
            event.preventDefault();
            this.props.fetchSchedule("IND", 1); 
          }}> 
          Schedule
        </button>
        <button className="btn btn-primary"
            onClick={(event: any) => { 
                event.preventDefault();
                this.props.fetchRoster("IND", 1);
          }}> 
          Roster
        </button>
        <br/>
        <div>
            {partialRender === 'schedule' ? 
            <ScheduleComponent 
            awayName = {awayName} awayPenalties = {awayPenalties} 
            awayPossessionTime={awayPossessionTime} awaySafeties={awaySafeties} 
            awayScore = {awayScore} date = {date} awayTotalYards={awayTotalYards}
            awayTurnovers={awayTurnovers}
            homeName={homeName} homeScore = {homeScore} 
            homePenalties={homePenalties}
            homePossessionTime={homePossessionTime}
            homeSafeties={homeSafeties}
            homeTotalYards={homeTotalYards}
            homeTurnovers={homeTurnovers}  /> :
            <RosterComponent roster={roster}/>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => state.team;
const mapDispatchToProps = {
  fetchRoster,
  fetchSchedule
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamComponent);