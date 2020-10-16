import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchResult from "./components/SearchResult"
import Categories from "./pages/Categories";

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Categories />
      </div>
    );
  }
}

export default App;
