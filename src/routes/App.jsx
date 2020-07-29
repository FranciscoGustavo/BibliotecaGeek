import React from 'react';

import TemplateDashboardApp from '../components/templates/TemplateDashboardApp';

import { Dashboard, Div } from './styles';

function App() {
  return (
    <>
      <Dashboard />
      <Div className="App">
        <TemplateDashboardApp>
          <h1>Hello World</h1>
          <p>Here go page</p>
        </TemplateDashboardApp>
      </Div>
    </>
  );
}

export default App;
