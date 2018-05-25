import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Samoa from './Samoan'

const App = () => {
  return (
    <Router>
      <div className='app container'>
        <Switch>
          <Route path='/' component={Header} />
          <Route path='/' component={Footer} />
          <Route exact path='/' component={Home} />
          <Route path='/samoa' component={Samoa} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
