import * as React from 'react';
import { Link } from "react-router-dom";


export const AppNav: React.StatelessComponent<any> = (props) => {
    let newTeams: string[] = [];
    const updateAddList = (event: any) => {
      if (event.target.checked) {
        newTeams.push(event.target.value);
        alert(newTeams);
      }
    }
    const addTeams = (event: any) => {
      const userString: any = localStorage.getItem('user');
      const user = JSON.parse(userString);
      fetch(`http://localhost:3001/users/${user.id}/updateTeams`, {
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
          return resp.json();
        } else {
          alert('Failed to update teams');
        }
        throw new Error('Failed to update teams');
      })
      .then(resp => {
        alert(user.teams);
        localStorage.setItem('user', JSON.stringify(resp));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      })
      .catch(err => {
        console.log(err);
      })
      newTeams = [];
    }
    const excludeUserTeams = (teamName: string) => {
      let exclude: boolean = false;
      const userString: any = localStorage.getItem('user');
      const user = JSON.parse(userString);
      user.teams.forEach((team: any)=> { 
        if (team.name === teamName) {
          exclude = true; 
        }
      });
      if (!exclude) {
        return teamName;
      }
      return;
    }
    const nflTeams: string[] = ['Giants', '49ers', 'Bills', 'Falcons', 'Broncos', 'Steelers', 'Panthers']
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
          <div className="navbar-header c-pointer shift-left" />
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
                <Link to="/home" className="unset-anchor nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/sign-in" className="unset-anchor nav-link">
                  Sign In
                </Link>
              </li>
              <li className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle pointer" id="team-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Favorite Teams</a>
              <div className="dropdown-menu" aria-labelledby="team-dropdown">
                <div className="dropdown-item"><Link to="/team" className="unset-anchor nav-link active">My Teams</Link></div>               
                <div className="dropdown-submenu">
                  <li className="nav-item active dropdown">
                  <a className="nav-link dropdown-toggle pointer" id="add-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Add Teams</a>
                  <div className="dropdown-item" aria-labelledby="add-dropdown">
                    {nflTeams.filter(excludeUserTeams).map((team: string) => (
                      <div className="dropdown-item">
                        <input onClick={updateAddList} type="checkbox" value={team} /> {team}
                      </div>
                      ))
                    }
                    <button onClick={addTeams}>Add Teams</button> 
                  </div>
                </li>
                </div>
              </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
