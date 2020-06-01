import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import store from '../store/store'
import Header from './Header'
import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'
import Error404 from './Error404'


const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Header/>
              <MoviesList/>
            </Route>
            <Route path="/movie/:id" component={MovieDetail}>
            </Route>
            <Route component={Error404}/>
          </Switch>
        </BrowserRouter> 
      </Provider>
  );
}

export default App;

