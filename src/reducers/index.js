import { combineReducers } from 'redux'

import maze from './maze'
import tortoise from './tortoise'

export default combineReducers({
  maze,
  tortoise
})
