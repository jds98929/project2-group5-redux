import * as React from 'react';
import { IState, ITeamState } from '../../reducers';
import { connect } from 'react-redux';
import { fetchSchedule, fetchRoster } from '../../actions/team/team.actions';
import { ScheduleComponent } from '../schedule/schedule.component';
import { RosterComponent } from '../roster/roster.component';


 
interface IProps extends ITeamState {
  fetchSchedule: () => any,
  fetchRoster:(alias : any, weekNum : any) => any,
}

export class TeamComponent extends React.Component<IProps, any> {
  public render() {
    const { games, roster, teamName, partialRender } = this.props;
    return (
      <div>
        <h3>{teamName}</h3>
        <button className="btn btn-primary" onClick={(event: any) => { 
            event.preventDefault();
            this.props.fetchSchedule(); 
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
            <ScheduleComponent games={games}/> :
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