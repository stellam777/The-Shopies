import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import history from './history'
import App from './app'
import {ToastProvider} from 'react-toast-notifications'

ReactDOM.render(
  <Router history={history}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Router>,
  document.getElementById('app')
)
