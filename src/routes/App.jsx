import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
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
            </Switch>
        </TemplateDashboardApp>
      </Div>
    </BrowserRouter>
  );
}

export default App;
