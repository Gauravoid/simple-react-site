import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import CustomNavbar from './components/CustomNavBar';
import Footer from './components/Footer';


class App extends Component {
  render() {
    const title = 'first title';
    return (
      <Router>
      	<div>
      		<CustomNavbar />
      		<Route exact path = "/" component= {Home} />
      		<Route   path = "/about" component= {About} />
      		<Route  path = "/news" component= {News} />
      		<Footer />
      	</div>
      </Router>
    );
  }
}

export default App;
