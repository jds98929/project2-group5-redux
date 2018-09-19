import * as React from 'react';
import './include/bootstrap';
import './App.css';
import {AppNav}  from './components/nav/nav.component';
import TeamComponent from './components/team/team.component'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import SignInComponent from './components/sign-in/sign-in.component';
import HomeComponent from './components/home/home.component';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppNav/>
            <div className="bg-1">
            <div id="main-content-container">
              {/* <div className="row">
                <div className="col-sm-4">
                  <p><strong>Name</strong></p><br />
                  <img src={logo1} className="rounded-circle" alt="Random Name"></img> 
                </div>
              </div> */}

              <Switch>
                <Route path="/team" component={TeamComponent} />
                <Route path="/sign-in" component={SignInComponent} />
                <Route path="/home" component={HomeComponent} />
                <Route component={SignInComponent} />
              </Switch>
             </div> 
            </div>

            </div>
          
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
