import * as React from 'react';
import { IState, ITeamState } from '../../reducers';
import { connect } from 'react-redux';
import { fetchSchedule, fetchRoster } from '../../actions/team/team.actions';


 
interface IProps extends ITeamState {
  fetchSchedule: () => any,
  fetchRoster: () => any,
  partialRender: () => any
}

export class TeamComponent extends React.Component<IProps, any> {

  public render() {
    const { teamName, partialRender } = this.props;
    return (
      <div>
        <h3>{teamName}</h3>
        <button className="btn btn-primary" onClick={(event: any) => { 
            event.preventDefault();
            this.props.fetchSchedule(); }}> 
          Schedule
        </button>
        <button className="btn btn-primary"
            onClick={(event: any) => { 
                event.preventDefault();
                this.props.fetchRoster()}}> 
          Roster
        </button>
        <br/>
        <div>
            {partialRender}
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