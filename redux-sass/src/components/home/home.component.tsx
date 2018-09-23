import { connect } from 'react-redux';
import * as React from 'react';
import { LeagueScheduleComponent } from './league-schedule.component';
import { IHomeState, IState } from '../../reducers';
import {  fetchDivStandings, fetchGame, fetchWeekSchedule } from '../../actions/home/home.actions';
import { LeagueStandingsComponent } from './league-standings.component';
import { PlayByPlayComponent } from './play-by-play.component';
import {Link} from 'react-router-dom';
import { RouteComponentProps } from '../../../node_modules/@types/react-router';

interface IProps extends IHomeState, RouteComponentProps<any>{
    fetchDivStandings: (endPoint: string) => any,
    fetchGame: (gameId: string) => any,
    fetchWeekSchedule: (weekNumber: number) => any
}

// const saveID = (id: any) => {
//     return id;
// }

export class HomeComponent extends React.Component<IProps, any> {

    public componentDidMount(){
        if (!localStorage.getItem('user')){
          this.props.history.push('/sign-in')
        }
    }

    public render() {
        const { gameWeek, divStandings, plays } = this.props
        return (
            <div id="home-container">
                <div className="row" id="home-title-container">
                    <h2 id="home-title" className="h2 text-center">Welcome to Team Space</h2>
                    <p className="text-center">Below, you can view the standings and schedules for all NFL teams by week or by division.</p>
                    <p className="text-center">Our play-by-play feed displays the broadcasts of past and ongoing games.</p>
                    <Link className="text-center" to="/team">Click here to view up-to-date game info for your favorite teams</Link>
                    <br/>
                </div>
                <br/>
                <div className="row" id="first-half">
                    <div className="col-9">
                        <select size={1} className="custom-select custom-select-sm" onChange={(event: any) => {
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
                        <LeagueScheduleComponent gameWeek={gameWeek} fetchGame={this.props.fetchGame}></LeagueScheduleComponent>
                    </div>
                    <div className="col-3">
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <PlayByPlayComponent plays={plays}></PlayByPlayComponent>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: IState) => state.home;
const mapDispatchToProps = {
    fetchDivStandings,
    fetchGame,
    fetchWeekSchedule
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);