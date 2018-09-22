import * as React from 'react';
import { IState, ITeamState} from '../../reducers';
import { connect } from 'react-redux';
import { fetchSchedule, fetchRoster, updateRender, updateTeamInfo, updateWeek } from '../../actions/team/team.actions';
import { ScheduleComponent } from '../schedule/schedule.component';
import { RosterComponent } from '../roster/roster.component';
import { RouteComponentProps } from '../../../node_modules/@types/react-router';


 
interface IProps extends ITeamState, RouteComponentProps<any>{
  fetchSchedule: (alias: any, weekNum: any) => any,
  fetchRoster:(alias : any, weekNum : any) => any,
  updateRender:(event: any) => any,
  updateTeamInfo:(oldName: string, event: any) => any,
  updateWeek:(event: any, oldWeek: number) => any
}

export class TeamComponent extends React.Component<IProps, any> {

  public componentDidMount(){
    if (!localStorage.getItem('user')){
      this.props.history.push('/sign-in')
    }
  }

  public componentDidUpdate(prevProps: IProps){
    if(this.props.weekNum !== prevProps.weekNum || this.props.teamName !== prevProps.teamName || this.props.partialRender !== prevProps.partialRender){
      if (this.props.partialRender === 'schedule') {
        this.props.fetchSchedule(this.props.alias, this.props.weekNum);
      }
      if (this.props.partialRender === 'roster') {
        this.props.fetchRoster(this.props.alias, this.props.weekNum);
      }
    }
  }

  public render() {
    const userString: any = localStorage.getItem('user');
    const user: any = JSON.parse(userString);
    const teamName = this.props.teamName;
    const weekNum = this.props.weekNum;
    return (
      <div id="team-container">
         <br/>
         <br/>
        <select className="form-control" onChange={(event) => {
          event.preventDefault();
          this.props.updateTeamInfo(this.props.teamName, event)}}>
          <option className="select" value="none"> Select a team </option>
          {user && user.teams.map((team: any) => (
            <option className="select" value={team.name}> {team.name} </option>
          ))
          }
        </select>
        <br/>
        <h3 className="team-name h3 mb-3 font-weight-normal">{teamName}</h3>
        <div className="btn-group">
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
        </div>
        <div className="week-container">
          {weekNum !== 1 ? <button className="page-button" value="back" 
          onClick={(event: any) => {
            event.preventDefault();
            this.props.updateWeek(event, weekNum)}}> &lt;&lt; </button> : ''
          }
          <span id="week-text"> {"Week" + weekNum} </span>
          <button className="page-button" value="forward" onClick={(event: any) => {
            event.preventDefault();
            this.props.updateWeek(event, weekNum)}}> &gt;&gt; </button>
        </div>
        <div>
        {this.props.partialRender === 'schedule' ?  
        <ScheduleComponent 
          awayName = {this.props.awayName} awayPenalties = {this.props.awayPenalties} 
          awayPossessionTime={this.props.awayPossessionTime} awaySafeties={this.props.awaySafeties} 
          awayScore = {this.props.awayScore} date = {this.props.date} awayTotalYards={this.props.awayTotalYards}
          awayTurnovers={this.props.awayTurnovers} broadcast = {this.props.broadcast}
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
  updateTeamInfo,
  updateWeek
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamComponent);