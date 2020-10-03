import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AddMoviePage from '../pages/AddMoviePage';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/add-movie" component={AddMoviePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
