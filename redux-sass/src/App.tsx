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
import PlayerComponent from './components/player/player.component';
class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppNav/>
            <div className="bg-1">
            <div id="main-content-container">


              <Switch>
                <Route path="/player" component={PlayerComponent}/>
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
