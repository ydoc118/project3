import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories";
import Business from "./pages/Business"
import Home from './pages/Home';
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/categories' component={Categories} />
            <Route path='/business/:id' component={Business} />
          </Switch>
        </Router>

    );
  
}

export default App;


