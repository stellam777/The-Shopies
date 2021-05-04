import React from 'react'
import {Route} from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Route to="/" component={Main} />
    </div>
  )
}

export default App
