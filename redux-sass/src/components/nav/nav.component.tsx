import * as React from 'react';
import { Link } from "react-router-dom";
import color_logo_transparent from '../../assets/color_logo_transparent.jpg';
import { environment } from '../../environment';


export const AppNav: React.StatelessComponent<any> = (props) => {
    let newTeams: string[] = [];
    const updateAddList = (event: any) => {
      if (event.target.checked) {
        newTeams.push(event.target.value);
      } else {
        newTeams.splice(newTeams.indexOf(event.target.value), 1);
      }
    }
    const addTeams = (event: any) => {
      const userString: any = localStorage.getItem('user');
      if (userString) {
        const user = JSON.parse(userString);
        fetch(environment.context + `users/${user.id}/updateTeams`, {
          body: JSON.stringify(newTeams),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })
        .then(resp => {
          console.log(resp.status)
          if (resp.status === 401) {
            alert('Invalid Credentials');
          } else if (resp.status === 200) {
            alert("")
            return resp.json();
          } else {
            alert('Failed to update teams');
          }
          throw new Error('Failed to update teams');
        })
        .then(resp => {
          localStorage.setItem('user', JSON.stringify(resp));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        })
        .catch(err => {
          console.log(err);
        })
        newTeams = [];
      } 
    }
    const excludeUserTeams = (teamName: string) => {
      let exclude: boolean = false;
      const userString: any = localStorage.getItem('user');
      const user = JSON.parse(userString);
      if (user && user.teams){
        user.teams.forEach((team: any)=> { 
          if (team.name && (team.name === teamName)) {
            exclude = true; 
          }
        });
      }
      if (!exclude) {
        return teamName;
      }
      return;
    }
    const nflTeams: string[] = ['Cardinals', 'Falcons', 'Ravens', 'Bills', 'Panthers', 'Bears', 'Bengals', 'Browns', 'Cowboys', 'Broncos', 'Lions', 'Packers', 'Texans', 'Colts', 'Jaguars', 'Chiefs', 'Dolphins', 'Vikings', 'Patriots', 'Saints', 'Giants', 'Jets', 'Raiders', 'Eagles', 'Steelers', 'Rams', 'Chargers', '49ers', 'Seahawks', 'Buccaneers', 'Titans', 'Redskins']
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
          <div className="navbar-header c-pointer shift-left">
          <Link to="/home" className="unset-anchor">
            <img className="img-adjust-position rev-logo" src={color_logo_transparent} alt="revature" />
          </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto margin-nav">
              <li className="nav-item active">
                <Link onClick={(event:any) => {
                  if (localStorage.getItem('user')){
                    return;
                  }
                  else {
                    event.preventDefault();
                  }
                }}to="/sign-in" className="unset-anchor nav-link">
                  Sign In
                </Link>
              </li>
              <li className="nav-item active">
                <Link onClick={(event:any) => {
                  if (localStorage.getItem('user')){
                    return;
                  }
                  else {
                    event.preventDefault();
                  }
                }}
                to="/home" className="unset-anchor nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle pointer" id="team-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Favorite Teams</a>
              {localStorage.getItem('user') ?
              <div className="dropdown-menu" aria-labelledby="team-dropdown">
                <div className="dropdown-item"><Link onClick={(event:any) => {
                  if (localStorage.getItem('user')){
                    return;
                  }
                  else {
                    event.preventDefault();
                  }
                }}to="/team" className="unset-anchor nav-link active">My Teams</Link></div>               
                <ul className="dropdown-submenu nav-link dropdown-toggle pointer">
                  <li className="nav-item active dropdown">
                  <a className="nav-link dropdown-toggle pointer" id="add-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Add Teams</a>
                  <div id="add-team-dropdown" className="dropdown-item" aria-labelledby="add-team-dropdown">
                    {localStorage.getItem('user') && nflTeams.filter(excludeUserTeams).map((team: string) => (
                      <div className="dropdown-item">
                        <input onClick={updateAddList} type="checkbox" value={team} /> {team}
                      </div>
                      ))
                    }
                    <button className="btn btn-primary" onClick={addTeams}>Add Teams</button> 
                  </div>
                </li>
                </ul>
              </div>
              :
              ''}
              </li>
              <li className="nav-item active">
                <Link onClick={(event:any) => {
                  if (localStorage.getItem('user')){
                    localStorage.removeItem('user')
                  }
                }}
                to="/sign-in" className="unset-anchor nav-link">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
