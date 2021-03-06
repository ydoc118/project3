import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories";
import Business from "./pages/Business"
import Home from './pages/Home';
import Sidebar from "./components/Sidebar";
import Register from './pages/Register';
import Login from './pages/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';


class App extends Component {
  render() {
    return (
      <AuthState>
        <AlertState>
        <Router>
        <Fragment>
          <Sidebar />
          <Alerts />
          <Switch>
          <PrivateRoute exact path='/' component={Home} />
            <Route path='/home' exact component={Home} />
            <Route path='/categories' component={Categories} />
            <Route path='/business/:id' component={Business} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
          </Fragment>
        </Router>
        </AlertState>
    </AuthState>

    );
  }
}

export default App;
