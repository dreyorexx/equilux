import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Header from './Header/header';

class App extends Component {
  constructor() {
    super();
    //this.state({});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Contents">
            <Switch>
              <Route exact path="/" component={Header} />


            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;