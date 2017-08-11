import React from 'react'

import { connect } from 'react-redux'

class Maze extends React.Component {
  render() {
    const getClass = cell => {
      switch (cell) {
        case 0: return 'emotyCell';
        case 1: return 'wall';
        case 2: return 'tortoise';
        default: return 'errorCell';
      }
    }

    const cells = row => row.map((cell, index) => (
      <div key={index} className={'mazeCell ' + getClass(cell)}>
      </div>
    ))

    const rows = this.props.maze.map.map((row, index) => (
      <div key={index} className='mazeRow'>
        {cells(row)}
      </div>
    ))

    return (
      <div className='maze'>
        {rows}
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({ maze: state.maze, ...ownProps }),
  dispatch => ({})
)(Maze);
