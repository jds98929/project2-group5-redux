import * as React from 'react';
import { IState, ITeamState } from '../../reducers';
import { connect } from 'react-redux';
import { fetchSchedule, fetchRoster } from '../../actions/team/team.actions';
import { ScheduleComponent } from '../schedule/schedule.component';
import { RosterComponent } from '../roster/roster.component';


 
interface IProps extends ITeamState {
  fetchSchedule: () => any,
  fetchRoster: () => any,
}

export class TeamComponent extends React.Component<IProps, any> {


  public render() {
    const { games, players, teamName, partialRender } = this.props;
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
                this.props.fetchRoster();
          }}> 
          Roster
        </button>
        <br/>
        <div>
            {partialRender === 'schedule' ? 
            <ScheduleComponent games={games}/> :
            <RosterComponent players={players}/>
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