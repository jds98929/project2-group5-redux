import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { LeagueScheduleComponent } from './league-schedule.component';
import { IHomeState, IState } from '../../reducers';
import { fetchWeekSchedule, fetchDivStandings } from '../../actions/home/home.actions';
import { LeagueStandingsComponent } from './league-standings.component';

interface IProps extends IHomeState {
    fetchDivStandings: (endPoint: string) => any,
    fetchWeekSchedule: (weekNumber: number) => any,
}

export class HomeComponent extends React.Component<IProps, any> {

    public render() {
        const { gameWeek, divStandings } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 h-50">

                        <select className="custom-select custom-select-sm" onChange={(event: any) => {
                            event.preventDefault();
                            this.props.fetchWeekSchedule(event.target.value);
                        }}>
                            <option selected>Select Week</option>
                            <option value={1}>Week 1</option>
                            <option value={2}>Week 2</option>
                            <option value={3}>Week 3</option>
                            <option value={4}>Week 4</option>
                            <option value={5}>Week 5</option>
                            <option value={6}>Week 6</option>
                            <option value={7}>Week 7</option>
                            <option value={8}>Week 8</option>
                            <option value={9}>Week 9</option>
                            <option value={10}>Week 10</option>
                            <option value={11}>Week 11</option>
                            <option value={12}>Week 12</option>
                            <option value={13}>Week 13</option>
                            <option value={14}>Week 14</option>
                            <option value={15}>Week 15</option>
                            <option value={16}>Week 16</option>
                            <option value={17}>Week 17</option>
                        </select>
                        <LeagueScheduleComponent gameWeek={gameWeek}></LeagueScheduleComponent>
                    </div>
                    <div className="col-4 h-50">
                        <select className="custom-select " onChange={(event: any) => {
                            event.preventDefault();
                            this.props.fetchDivStandings(event.target.value);
                        }}>
                            <option selected>Select Division</option>
                            <option value="AFC/AFC_EAST">AFC East</option>
                            <option value="AFC/AFC_NORTH">AFC North</option>
                            <option value="AFC/AFC_WEST">AFC West</option>
                            <option value="AFC/AFC_SOUTH">AFC South</option>
                            <option value="NFC/NFC_EAST">NFC East</option>
                            <option value="NFC/NFC_NORTH">NFC North</option>
                            <option value="NFC/NFC_WEST">NFC West</option>
                            <option value="NFC/NFC_SOUTH">NFC South</option>
                        </select>
                        <LeagueStandingsComponent divStandings={divStandings}></LeagueStandingsComponent>
                        <div className="col-4">
                            <div className="h-33">
                                <h5>View Teams</h5>
                                <p>Description </p>
                                <Link to="/" className=""><button className="btn btn-secondary" role="button">View Table</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state: IState) => state.home;
const mapDispatchToProps = {
    fetchDivStandings,
    fetchWeekSchedule
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);