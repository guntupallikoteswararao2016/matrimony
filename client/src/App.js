import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Profile from './profile';
import './App.css';

const AnotherPage = () => <h1>Another Page</h1>;
const NotFound = () => <h1>404 Not Found</h1>;


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/another-page/" component={AnotherPage} />
        <Route path="/profile/:id" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
