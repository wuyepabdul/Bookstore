import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Books />
        {' '}
      </Route>
      <Route exact path="/categories">
        <Categories />
        {' '}
      </Route>

    </Switch>
  </Router>
);

export default App;
