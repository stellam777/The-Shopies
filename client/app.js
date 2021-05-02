import React from 'react'
import {Route} from 'react-router-dom'
//import {Navbar} from './components';
import Main from './components/Main'

const App = () => {
  return (
    <div>
      <Route to="/" component={Main} />
    </div>
  )
}

export default App
