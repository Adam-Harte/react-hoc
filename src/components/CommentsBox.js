import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentsBox extends Component {
   state = {
      comment: '',
      comments: []
   };

   componentDidMount() {
      this.shouldNavigateAway();
   }

   componentDidUpdate() {
      this.shouldNavigateAway();
   }

   shouldNavigateAway () {
      if (!this.props.auth) {
         this.props.history.push("/");
      }
   }

   handleChange = event => {
      this.setState({ comment: event.target.value })
   }

   handleSubmit = event => {
      event.preventDefault();

      // TODO - call an action creator
      // and save the comment
      this.props.onSaveComment(this.state.comment);

      this.setState({ comment: '' });
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea value={this.state.comment} onChange={this.handleChange} />
            <div>
               <button>Submit</button>
               <button className="fetch-comments" onClick={this.props.onFetchComments}>Fetch Comments</button>
            </div>
         </form>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      auth: state.auth
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSaveComment: (comment) => {
         dispatch(actions.saveComment(comment))
      },
      onFetchComments: () => {
         dispatch(actions.fetchComments())
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsBox);