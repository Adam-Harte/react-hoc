import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import CommentsBox from './components/CommentsBox';
import CommentsList from './components/CommentsList';

class App extends Component {
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
