import React, { Component } from 'react';
import { Provider } from 'react-redux'
import config from './store/config'
import FileContainer from './containers/FileContainer'

const store = config

const App = () => {
  return(
      <Provider store={store}>
        <FileContainer/>
      </Provider>
  )
}

export default App;
