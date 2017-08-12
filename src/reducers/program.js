export const codeChanged = code => ({
  type: 'CODE_CHANGED',
  code
})

export default (state = {code: ''}, action) => {
  console.log(action);

  switch (action.type) {
    case 'CODE_CHANGED': return { code: action.code, ...state };
    default: return state;
  }
}
