import React from 'react'

import { connect } from 'react-redux'

import { codeChanged } from '../reducers/program'

class Program extends React.Component {
  onCodeChanged(event) {
    console.log(event);
    this.props.program.code = event.target.value;
  }

  render() {
    return (
      <div>
        <textarea value={this.props.program.code} onChange={this.onCodeChanged} />
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({program: state.program, ...ownProps}),
  dispatch => ({
    onCodeChanged: event => {
      console.log(event);
      return dispatch(codeChanged(event.target.value));
  }})
)(Program);
