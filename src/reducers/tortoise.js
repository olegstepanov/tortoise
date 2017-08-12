export const moveTortoise = move => ({
  type: 'MOVE_TORTOISE',
  move
})

export default (state = null, action) => {
  switch (action.type) {
    case 'NEW_MAZE':
      return {
        pos: [1, 1],
        lastMove: [0, 0],
        trace: []
      }
    case 'MOVE_TORTOISE':
      return {
        pos: [state.pos[0] + action.move[0], state.pos[1] + action.move[1]],
        lastMove: action.move,
        trace: [...state.trace, state.pos]
      }
    default:
      return state;
  }
}
