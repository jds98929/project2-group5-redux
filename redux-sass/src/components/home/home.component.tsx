import { connect } from 'react-redux';
import * as React from 'react';
import { LeagueScheduleComponent } from './league-schedule.component';
import { IHomeState, IState } from '../../reducers';
import { fetchWeekSchedule, fetchDivStandings, fetchGame } from '../../actions/home/home.actions';
import { LeagueStandingsComponent } from './league-standings.component';
import { PlayByPlayComponent } from './play-by-play.component';

interface IProps extends IHomeState {
    fetchDivStandings: (endPoint: string) => any,
    fetchWeekSchedule: (weekNumber: number) => any,
    fetchGame: (gameId: string) => any
}

// const saveID = (id: any) => {
//     return id;
// }

export class HomeComponent extends React.Component<IProps, any> {

    public render() {
        const { gameWeek, divStandings, plays } = this.props
        return (
            <div className="container">
                <div className="row" id="home-title">
                    <h1 className="display-4 text-center col-12">Home Page</h1>
                </div>
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
    fetchWeekSchedule,
    fetchGame
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);