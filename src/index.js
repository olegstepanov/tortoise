import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Maze from './components/Maze'
import reducers from './reducers'

import styles from './styles.scss'

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Maze />
  </Provider>,
  document.getElementById('root')
)
