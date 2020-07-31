import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Home from '../components/pages/Home';
import Posts from '../components/pages/Posts';
import NewPost from '../components/pages/NewPost';
import EditPost from '../components/pages/EditPost';
import Login from '../components/pages/Login';
import TemplateDashboardApp from '../components/templates/TemplateDashboardApp';

import { Dashboard, Div } from './styles';

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
      <Div className="App">
        <TemplateDashboardApp>
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/posts" component={Posts} />
              <ProtectedRoute exact path="/posts/new" component={NewPost} />
              <ProtectedRoute exact path="/posts/edit/:id" component={EditPost} />
            </Switch>
        </TemplateDashboardApp>
      </Div>
    </BrowserRouter>
  );
}

export default App;
