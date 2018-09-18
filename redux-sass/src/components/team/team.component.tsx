import * as React from 'react';
import { IState, ITeamState, ISignInState} from '../../reducers';
import { connect } from 'react-redux';
import { fetchSchedule, fetchRoster, updateRender, updateTeamInfo } from '../../actions/team/team.actions';
import { ScheduleComponent } from '../schedule/schedule.component';
import { RosterComponent } from '../roster/roster.component';

 
interface IProps extends ITeamState, ISignInState {
  fetchSchedule: (alias: any, weekNum: any) => any,
  fetchRoster:(alias : any, weekNum : any) => any,
  updateRender:(event: any) => any,
  updateTeamInfo:(oldName: string, event: any) => any
}

export class TeamComponent extends React.Component<IProps, any> {

  public componentDidUpdate(){
    if (this.props.partialRender === 'schedule') {
      this.props.fetchSchedule(this.props.alias, 1);
    }
    if (this.props.partialRender === 'roster') {
      this.props.fetchRoster(this.props.alias, 1);
    }
  }

  public render() {
    const userString: any = localStorage.getItem('user');
    const user: any = JSON.parse(userString);
    const teamName = this.props.teamName;
    return (
      <div>
        <div>
          <button> << 
        </div>
        <select onChange={(event) => {
          event.preventDefault();
          this.props.updateTeamInfo(this.props.teamName, event)}}>
          <option value="none"> Select a team </option>
          {user && user.teams.map((team: any) => (
            <option value={team.name}> {team.name} </option>
          ))
          }
        </select>
        <h3>{teamName}</h3>
        <button id="schedule" className="btn btn-primary" 
        onClick={(event) => {
          event.preventDefault();
          this.props.updateRender(event)}}> 
          Schedule
        </button>
        <button id="roster" className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault();
              this.props.updateRender(event)}}> 
          Roster
        </button>
        <br/>
        <div>
        {this.props.partialRender === 'schedule' ? 
        <ScheduleComponent 
          awayName = {this.props.awayName} awayPenalties = {this.props.awayPenalties} 
          awayPossessionTime={this.props.awayPossessionTime} awaySafeties={this.props.awaySafeties} 
          awayScore = {this.props.awayScore} date = {this.props.date} awayTotalYards={this.props.awayTotalYards}
          awayTurnovers={this.props.awayTurnovers}
          homeName={this.props.homeName} homeScore = {this.props.homeScore} 
          homePenalties={this.props.homePenalties}
          homePossessionTime={this.props.homePossessionTime}
          homeSafeties={this.props.homeSafeties}
          homeTotalYards={this.props.homeTotalYards}
          homeTurnovers={this.props.homeTurnovers}  /> 
          : <RosterComponent roster={this.props.roster}/>
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => state.team;

const mapDispatchToProps = {
  fetchRoster,
  fetchSchedule,
  updateRender,
  updateTeamInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamComponent);