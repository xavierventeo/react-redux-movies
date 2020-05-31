import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'
import Header from './Header'

const App = () => {
  return (
      <Provider store={store}>
        <Header/>
      </Provider>
  );
}

export default App;
