import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Maze from './components/Maze'
import Program from './components/Program'
import Mover from './components/Mover'

import reducers from './reducers'
import { newMaze } from './reducers/maze'

import styles from './styles.scss'

const store = createStore(reducers);

const Layout = () => (
  <div>
    <div className='leftPane'>
      <Maze />
    </div>
    <Mover />
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(newMaze());
