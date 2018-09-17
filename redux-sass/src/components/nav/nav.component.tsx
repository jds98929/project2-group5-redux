import * as React from 'react';
import { Link } from "react-router-dom";

export const AppNav: React.StatelessComponent<any> = (props) => {
    const userString: any = localStorage.getItem('user');
    const user: any = JSON.parse(userString);
    
    const handle = (event:any) => {
      const teamName: string = event.target.id;
      localStorage.setItem('teamName', teamName);
    }

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
                <a
                  className="nav-link dropdown-toggle pointer"
                  id="examples-dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Favorite Teams
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="examples-dropdown"
                > {user.teams.map((team: any) => (
                  <div className="dropdown-item">
                    <Link id={team.name} onClick={handle} to="/team" className="unset-anchor nav-link active">
                      {team.name}            
                    </Link>
                  </div>
                ))}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
