import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Desktop9 from './views/desktop9'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Desktop9} exact path="/desktop9" />
        <Route component={Page} exact path="/page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
