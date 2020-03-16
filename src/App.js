import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home';
import Topics from './views/Topics';
import Topic from './views/Topic';
import Resources from './views/Resource';



function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: '0 auto' }}>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/topics'>Topics</Link> </li>
        </ul>
        <hr />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/topics" exact render={() => <Topics />} />
          <Route
            path="/topics/:topicId"
            exact
            render={props => {
              return <Topic {...props} />;
            }}
          />
          <Route
            path="/topics/:topicId/:resId"
            exact
            render={props => {
              return <Resources {...props} />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
