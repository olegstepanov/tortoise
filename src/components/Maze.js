import React from 'react'

import { connect } from 'react-redux'

class Maze extends React.Component {
  render() {
    const getClass = cell => {
      switch (cell) {
        case 0: return 'emotyCell';
        case 1: return 'wall';
        case 2: return 'tortoise';
        default: return '';
      }
    }

    const cells = row => row.map((cell, index) => {
      var cellStyle = {};
      if (cell >= 10)
        cellStyle = {backgroundColor: 'rgb(255, ' + (255 - cell * 2) + ', ' + (255 - cell * 2) + ')'};
      return (<div key={index} className={'mazeCell ' + getClass(cell)} style={cellStyle}></div>);
    });

    const map = _.cloneDeep(this.props.maze.map);
    const tortoise = this.props.tortoise;

    if (tortoise) {
      for (const trace of tortoise.trace)
        map[trace[0]][trace[1]] += 10;
      map[tortoise.pos[0]][tortoise.pos[1]] = 2;
    }
    const rows = map.map((row, index) => (
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
  (state, ownProps) => ({ maze: state.maze, tortoise: state.tortoise, ...ownProps }),
  dispatch => ({})
)(Maze);
