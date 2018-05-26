import React from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Samoan from './Samoan'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route path='/' component={Header} />
        <div>
          <Route path='/' component={Home} />
          <Route path='/samoan' component={Samoan} />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
