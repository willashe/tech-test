import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import SideNav from './components/SideNav/';
import Home from './components/pages/Home';
import Food from './components/pages/Food';
import Coffee from './components/pages/Coffee';
import Fitness from './components/pages/Fitness';
import Guitar from './components/pages/Guitar';
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
              <Route exact path="/food">
                <Food />
              </Route>
              <Route exact path="/coffee">
                <Coffee />
              </Route>
              <Route path="/fitness">
                <Fitness />
              </Route>
              <Route path="/guitar">
                <Guitar />
              </Route>
              <Route path="/">
                <Home />
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
