import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { LeagueScheduleComponent } from './league-schedule.component';
import { IHomeState, IState } from '../../reducers';
import { fetchWeekSchedule } from '../../actions/home/home.actions';

interface IProps extends IHomeState {
    fetchWeekSchedule: () => any,
}

export class HomeComponent extends React.Component<IProps, any> {
    public render() {
        const { gameWeek } = this.props
        return (
            <div className="w-100">
                <div className="jumbotron">
                    {/* <img className="logo1 float-left" src={NflLogo1} alt="Logo 1" height="180px" width="140px" /> */}
                    <h1 className="display-4 d-flex justify-content-center">Welcome username!</h1>
                    <p className="lead d-flex justify-content-center">Homepage</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={(event: any) => {
                                event.preventDefault();
                                this.props.fetchWeekSchedule();
                            }}>
                                Get Week 1 Schedule
                            </button>
                            <h5>Games(by Week)</h5>
                            <LeagueScheduleComponent gameWeek={gameWeek}></LeagueScheduleComponent>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h5>View Teams</h5>
                            <p>Description </p>
                            <Link to="/" className=""><button className="btn btn-secondary" role="button">View Table</button></Link>
                        </div>
                        <div className="col-6">
                            <h5>Placeholder</h5>
                            <p>Description</p>
                            <Link to="/" className=""><button className="btn btn-secondary" role="button">Create New Ticket</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: IState) => state.home;
const mapDispatchToProps = {
    fetchWeekSchedule
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);