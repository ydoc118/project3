import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import SearchResult from "./components/SearchResult"
import Categories from "./pages/Categories";
import Businesses from "./pages/Business"

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          <Route exact path="/" component={Categories}/>
          <Route path="/business" component={Businesses}/>
        </Router>


      </div>
    );
  }
}

export default App;
