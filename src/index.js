import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import {
  createStore,
  applyMiddleware,
} from 'redux'


//import rootSagas from './pages/home/sagas'
import rootSagas from './app/sagas'
import rootReducers from './app/reducer'
import App from './app/App'

const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSagas)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
