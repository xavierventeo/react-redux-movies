import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'
import Controls from './Controls'



const App = () => {
  return (
      <Provider store={store}>
        <Controls/>
      </Provider>
  );
}

export default App;
