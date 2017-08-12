import React from 'react'
import { connect } from 'react-redux'
import { moveTortoise } from '../reducers/tortoise'

class Mover extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

    componentDidMount() {
      this.makeAMove();
    }

    componentDidUpdate(prevProps, prevState) {
      this.makeAMove();
    }

    makeAMove() {
      const dirs = [[0, 1], [-1, 0], [0, -1], [1, 0]];

      const { map, tortoise } = this.props;

      if (tortoise == null)
        return;

      if (_.isEqual(tortoise.pos, [map.length - 2, map[0].length - 2]))
        return;

      var pos = _.findIndex(dirs, e => _.isEqual(e, tortoise.lastMove));
      if (pos < 0)
        pos = 0;
      const rotatedDirs = [...dirs.slice((pos - 1) % dirs.length, dirs.length),
                           ...dirs.slice(0, (pos - 1) % dirs.length)];

      console.log(tortoise.lastMove);
      console.log(pos);
      console.log(rotatedDirs);

      for (const dir of rotatedDirs) {
        const nextPos = [tortoise.pos[0] + dir[0], tortoise.pos[1] + dir[1]];
        const manp = map[nextPos[0]][nextPos[1]];

        if (manp == 0) {
          console.log(dir);
          setTimeout(() => {this.props.onMoveMade(dir)}, 10);
          return;
        }
      }
    }

    render() {
      console.log('Mover.render');
      return (
        <div></div>
      );
    }
}

export default connect(
  (state, ownProps) => ({map: state.maze.map, tortoise: state.tortoise, ...ownProps}),
  (dispatch, ownProps) => ({
    onMoveMade: dir => {
      return dispatch(moveTortoise(dir));
    }})
)(Mover);
