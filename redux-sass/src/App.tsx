import * as React from 'react';
import './include/bootstrap';
import './App.css';
import { AppNav } from './components/nav/nav.component';
import TeamComponent from './components/team/team.component'
{/*import AppNav from './components/navbar/navbar.component';*/}
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
            <AppNav />
            <div id="main-content-container">
              <Switch>
                <Route path="/team" component={TeamComponent} />
                <Route path="/sign-in" component={SignInComponent} />
                <Route path="/home" component={HomeComponent} />
                <Route component={SignInComponent} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
