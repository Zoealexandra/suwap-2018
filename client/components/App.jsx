import React from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
// import Header from './Header'
// import Footer from './Footer'
import Samoan from './Samoan'

const App = () => {
  return (
    <Router>
      <div className='app'>
        {/* <Switch> */}
        {/* <Route path='/' component={Header} />
        <Route path='/' component={Footer} /> */}
        <Route path='/' component={Home} />
        <Route path='/samoan' component={Samoan} />
        {/* </Switch> */}
      </div>
    </Router>
  )
}

export default App
