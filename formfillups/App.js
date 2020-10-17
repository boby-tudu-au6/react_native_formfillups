import React from 'react';
import { Provider } from 'react-redux'
import store from './components/redux/store'
import Navigation from './components/shared/Navigation'


export default function App(){
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
