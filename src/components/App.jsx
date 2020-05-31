import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'
import Header from './Header'
import MoviesList from './MoviesList'

const App = () => {
  return (
      <Provider store={store}>
        <Header/>
        <MoviesList/>
      </Provider>
  );
}

export default App;
