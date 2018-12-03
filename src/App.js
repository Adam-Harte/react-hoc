import React, { Component } from 'react';
import './App.css';

import CommentsBox from './components/CommentsBox';
import CommentsList from './components/CommentsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentsBox />
        <CommentsList />
      </div>
    );
  }
}

export default App;
