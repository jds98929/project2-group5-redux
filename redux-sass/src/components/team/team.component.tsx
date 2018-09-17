import * as React from 'react';
import { IState, ITeamState, ISignInState} from '../../reducers';
import { connect } from 'react-redux';
import { fetchSchedule, fetchRoster } from '../../actions/team/team.actions';
import { ScheduleComponent } from '../schedule/schedule.component';
import { RosterComponent } from '../roster/roster.component';

 
interface IProps extends ITeamState, ISignInState {
  fetchSchedule: (alias: any, weekNum: any) => any,
  fetchRoster:(alias : any, weekNum : any) => any,
}

export class TeamComponent extends React.Component<IProps, any> {

  public getAlias(teamName: string, teams: any) {
    let alias = '';
    teams.forEach((team:any) => {
      if (team.name === teamName) {
        alias = team.alias;
      }
    })
    return alias;
  }

  public render() {
    const userString: any = localStorage.getItem('user');
    const user: any = JSON.parse(userString);
    const teamName: any = localStorage.getItem('teamName');
    const alias: string = this.getAlias(teamName, user.teams);
    const { awayName, awayPenalties, awayPossessionTime, awaySafeties, awayTotalYards, awayTurnovers, awayScore, date, homeName, homeScore, homePenalties, homePossessionTime,
      homeSafeties, roster, homeTotalYards, homeTurnovers, partialRender } = this.props;
    return (
      <div>
        <h3>{teamName}</h3>
        <button className="btn btn-primary" onClick={(event: any) => { 
            event.preventDefault();
            this.props.fetchSchedule(alias, 1); 
          }}> 
          Schedule
        </button>
        <button className="btn btn-primary"
            onClick={(event: any) => { 
                event.preventDefault();
                this.props.fetchRoster(alias, 1);
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