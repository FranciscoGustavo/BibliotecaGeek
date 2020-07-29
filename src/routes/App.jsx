import React from 'react';

import Header from '../components/organisms/Header';
import Navbar from '../components/organisms/Navbar';

import { Dashboard, Div } from './styles';

function App() {
  return (
    <>
        <Dashboard />
        <Div className="App">
            <Header />
            <Navbar />
            <main>
              <h1>Hello World</h1>
            </main>
        </Div>
    </>
  );
}

export default App;
