import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Error from './components/Error';



import {BrowserRouter, Route, Switch} from "react-router-dom";




class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
              <Route path="/" component={ Home } exact/>
              <Route path="/about" component={ About } />
              <Route path="/contact" component={ Contact } />
              <Route component={ Error } />
            </Switch>
          
        </BrowserRouter>


    );
  }
}

export default App;
