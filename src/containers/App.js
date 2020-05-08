import React from 'react';
import '../App.css';
import {Route, Switch} from 'react-router-dom'
import Home from '../components/home/Home'
import UserDetail from '../components/user-detail/UserDetail'

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    <Switch>
      <Route exact path="/user-detail/" component={UserDetail}/>
    </Switch>
    </>
  );
}

export default App;
