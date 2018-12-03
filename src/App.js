import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import CommentsBox from './components/CommentsBox';
import CommentsList from './components/CommentsList';

class App extends Component {

  renderHeader () {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>
          
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <Route path="/post" component={CommentsBox} />
        <Route path="/" exact component={CommentsList} />
      </div>
    );
  }
}

export default App;
