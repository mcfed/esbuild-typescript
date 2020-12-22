import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import storeManager from './store'
import WorkBench from './workbench'

const history = createBrowserHistory()

const store = storeManager.getStore()


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={WorkBench} />
        </Switch>
      </Router>
    </Provider>
  )
}


ReactDOM.render(<App />, document.getElementById("root"))