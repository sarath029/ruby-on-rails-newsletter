// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../containers/App'
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../store/reducer'


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  type: types.ERROR,
  transition: transitions.FADE
}

const store = createStore(reducer);

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <App /></Provider>
    </AlertProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
