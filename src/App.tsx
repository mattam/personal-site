import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import components
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Home from './components/Home';

// import stuff local
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>        
        </Router>
    </div>
  );
}

export default App;
