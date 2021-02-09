import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Footer from './components/Footer';

const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Router>
        <>
          <SideNav />
          <main>
            <Switch>
              <Route exact path="/">
                <Page1 />
              </Route>
              <Route path="/page2">
                <Page2 />
              </Route>
            </Switch>
          </main>
        </>
      </Router>
    </div>
    <Footer />
  </div>
);

export default App;
