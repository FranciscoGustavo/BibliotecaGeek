import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Posts from '../components/pages/Posts';
import TemplateDashboardApp from '../components/templates/TemplateDashboardApp';

import { Dashboard, Div } from './styles';

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
      <Div className="App">
        <TemplateDashboardApp>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={Posts} />
            </Switch>
        </TemplateDashboardApp>
      </Div>
    </BrowserRouter>
  );
}

export default App;
