import * as React from 'react';
import { IState, ITeamState, ISignInState, IPlayerState} from '../../reducers';
import { connect } from 'react-redux';
import { fetchPlayer } from '../../actions/player/player.actions';
import defaultAvatar  from "../../assets/defaultavatar.jpg";
interface IProps extends ITeamState, ISignInState, IPlayerState {
    fetchPlayer: (id: any) => any,
  }
export class PlayerComponent extends React.Component<IProps, any> {
    public componentDidMount(){
        this.props.fetchPlayer(localStorage.getItem('id'));
    }    
    public render(){
        const {birth_date, birth_place,college, height, jersey, name, position,rookie_year,seasons,weight } = this.props;
        console.log(seasons);
        return (
        <div id = "player-container">   
        <div className="card">
        <div className="row no-gutters">
            <div className="col-auto">
                <img src={defaultAvatar} className="img-fluid" alt=""/>
            </div>
            <div className="col">
                <div className="card-block px-2">
                    <h4 className="card-title">{name}, #{jersey} {position}</h4>
                    <p className="card-text">Height: {height} Weight: {weight}</p>
                    <p className="card-text"> Born: {birth_date} {birth_place}</p>
                    <p className="card-text"> College: {college}</p>
                    <p className="card-text"> Rookie Year: {rookie_year}</p>                  
                </div>
            </div>
        </div>
        </div>
        <div id = "player-season-scrollbar">
         {seasons.map((season: any) => (
             <div id = {season.id}>
             <h2>Season {season.year} ({season.name})</h2>
                {
                    season.teams.map((team:any) => (
                      <div id = {team.name}>
                          <h3>{team.name}, {team.market}</h3>
                            <table className="table table-striped table-dark col" id="player-profile-table">
                                <tr>
                                    <th>Games Played</th>
                                    <th>Games Started</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>{team.statistics.games_played}</td>
                                        <td>{team.statistics.games_started}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {team.statistics.passing ?(
                            <div>
                            <h2>Passing</h2>
                            <table className="table table-striped table-dark col">
                                <tr>
                                    <th>Attempts</th>
                                    <th>Completions</th>
                                    <th>Completion Percentage</th>
                                    <th>Yards</th>
                                    <th>Average Yards</th>
                                    <th>Sacks</th>
                                    <th>Sack Yards</th>
                                    <th>Touchdowns</th>
                                    <th>Longest Pass</th>
                                    <th>Interceptions</th>
                                    <th>QB Rating</th>
                                    <th>Total Yards</th>
                                    <th>Average Pocket Time</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>{team.statistics.passing.attempts}</td>
                                        <td>{team.statistics.passing.completions}</td>
                                        <td>{team.statistics.passing.cmp_pct}</td>
                                        <td>{team.statistics.passing.yards}</td>
                                        <td>{team.statistics.passing.avg_yards}</td>
                                        <td>{team.statistics.passing.sacks}</td>
                                        <td>{team.statistics.passing.sack_yards}</td>
                                        <td>{team.statistics.passing.touchdowns}</td>
                                        <td>{team.statistics.passing.longest}</td>
                                        <td>{team.statistics.passing.interceptions}</td>
                                        <td>{team.statistics.passing.rating}</td>
                                        <td>{team.statistics.passing.net_yards}</td>
                                        <td>{team.statistics.passing.avg_pocket_time}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            ):(<div></div>)
                            }
                            {team.statistics.kickoffs ?(
                            <div>
                            <h2>Kickoffs</h2>
                            <table className="table table-striped table-dark col">
                                <tr>
                                    <th>Kickoffs</th>
                                    <th>Endzone</th>
                                    <th>Inside 20</th>
                                    <th>Return Yards</th>
                                    <th>Touchbacks</th>
                                    <th>Yards</th>
                                    <th>Out Of Bounds</th>
                                    <th>Onsides Attempt</th>
                                    <th>Onsides Successes</th>
                                    <th>Squib Kicks</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>{team.statistics.kickoffs.kickoffs}</td>
                                        <td>{team.statistics.kickoffs.endzone}</td>
                                        <td>{team.statistics.kickoffs.inside_20}</td>
                                        <td>{team.statistics.kickoffs.return_yards}</td>
                                        <td>{team.statistics.kickoffs.touchbacks}</td>
                                        <td>{team.statistics.kickoffs.yards}</td>
                                        <td>{team.statistics.kickoffs.out_of_bounds}</td>
                                        <td>{team.statistics.kickoffs.onside_attempts}</td>
                                        <td>{team.statistics.kickoffs.onside_successes}</td>
                                        <td>{team.statistics.kickoffs.squib_kicks}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            ):(<div></div>)
                            }
                            {team.statistics.field_goals ?(
                            <div>
                            <h2>Field Goals</h2>
                            <table className="table table-striped table-dark col">
                                <tr>
                                    <th>Attempts</th>
                                    <th>Made</th>
                                    <th>Blocked</th>
                                    <th>Yards</th>
                                    <th>Average Yards</th>
                                    <th>Longest</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>{team.statistics.field_goals.attempts}</td>
                                        <td>{team.statistics.field_goals.made}</td>
                                        <td>{team.statistics.field_goals.blocked}</td>
                                        <td>{team.statistics.field_goals.yards}</td>
                                        <td>{team.statistics.field_goals.avg_yards}</td>
                                        <td>{team.statistics.field_goals.longest}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            ):(<div></div>)
                            }
                            {team.statistics.extra_points ?(
                            <div>
                            <h2>Extra Points</h2>
                            <table className="table table-striped table-dark col">
                                <tr>
                                    <th>Attempts</th>
                                    <th>Made</th>
                                    <th>Blocked</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>{team.statistics.extra_points.attempts}</td>
                                        <td>{team.statistics.extra_points.made}</td>
                                        <td>{team.statistics.extra_points.blocked}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            ):(<div></div>)
                            }
                            {team.statistics.passing ?(
                            <div>
                            <h2>Passing</h2>
                            <table className="table table-striped table-dark col">
                                <tr>
                                    <th>Attempts</th>
                                    <th>Completions</th>
                                    <th>Completion Percentage</th>
                                    <th>Yards</th>
                                    <th>Average Yards</th>
                                    <th>Sacks</th>
                                    <th>Sack Yards</th>
                                    <th>Touchdowns</th>
                                    <th>Longest Pass</th>
                                    <th>Interceptions</th>
                                    <th>QB Rating</th>
                                    <th>Total Yards</th>
                                    <th>Average Pocket Time</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>{team.statistics.passing.attempts}</td>
                                        <td>{team.statistics.passing.completions}</td>
                                        <td>{team.statistics.passing.cmp_pct}</td>
                                        <td>{team.statistics.passing.yards}</td>
                                        <td>{team.statistics.passing.avg_yards}</td>
                                        <td>{team.statistics.passing.sacks}</td>
                                        <td>{team.statistics.passing.sack_yards}</td>
                                        <td>{team.statistics.passing.touchdowns}</td>
                                        <td>{team.statistics.passing.longest}</td>
                                        <td>{team.statistics.passing.interceptions}</td>
                                        <td>{team.statistics.passing.rating}</td>
                                        <td>{team.statistics.passing.net_yards}</td>
                                        <td>{team.statistics.passing.avg_pocket_time}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            ):(<div></div>)
                            }
                            {team.statistics.rushing ?(
                            <div>
                            <h2>Rushing</h2>
                            <table className="table table-striped table-dark col">
                                <tr>
                                    <th>Average Yards</th>
                                    <th>Attempts</th>
                                    <th>Touchdowns</th>
                                    <th>Yards</th>
                                    <th>Longest Rush</th>
                                    <th>Longest Touchdown</th>
                                    <th>Tackle for a Loss</th>
                                    <th>Broken Tackles</th>
                                    <th>Yards After Contact</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>{team.statistics.rushing.avg_yards}</td>
                                        <td>{team.statistics.rushing.attempts}</td>
                                        <td>{team.statistics.rushing.touchdowns}</td>
                                        <td>{team.statistics.rushing.yards}</td>
                                        <td>{team.statistics.rushing.longest}</td>
                                        <td>{team.statistics.rushing.longest_touchdown}</td>
                                        <td>{team.statistics.rushing.tlost}</td>
                                        <td>{team.statistics.rushing.broken_tackles}</td>
                                        <td>{team.statistics.rushing.yards_after_contact}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            ):(<div></div>)
                            }
                            {team.statistics.defense ?(
                            <div>
                            <h2>Defense</h2>
                            <table className="table table-striped table-dark col">
                                <tr>
                                    <th>Tackles</th>
                                    <th>Assists</th>
                                    <th>Combined</th>
                                    <th>Sacks</th>
                                    <th>Sack Yards</th>
                                    <th>Interceptions</th>
                                    <th>Passes Defended</th>
                                    <th>Forced Fumbles</th>
                                    <th>Fumble Recoveries</th>
                                    <th>QB Hits</th>
                                    <th>Tackes for a Loss</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>{team.statistics.defense.tackles}</td>
                                        <td>{team.statistics.defense.assists}</td>
                                        <td>{team.statistics.defense.combined}</td>
                                        <td>{team.statistics.defense.sacks}</td>
                                        <td>{team.statistics.defense.sack_yards}</td>
                                        <td>{team.statistics.defense.interceptions}</td>
                                        <td>{team.statistics.defense.passes_defended}</td>
                                        <td>{team.statistics.defense.forced_fumbles}</td>
                                        <td>{team.statistics.defense.fumble_recoveries}</td>
                                        <td>{team.statistics.defense.qb_hits}</td>
                                        <td>{team.statistics.defense.tloss}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            ):(<div></div>)
                            }
                      </div>
                    ))
                }
             </div>
         ))}
         </div>
         </div>
        )
    }
}

const mapStateToProps = (state: IState) => state.player;
const mapDispatchToProps = {
  fetchPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);