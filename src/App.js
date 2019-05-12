import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';

import Nav from './components/Nav';
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'
import Logo from './Logo'

function App() {
  return (
    <Router>
      <div className="App">

        <div className="NavBar">
          <Logo></Logo>
          <Nav></Nav>
        </div>

          <Route exact path="/" component={Home}/>
          <Route path="/services/" component={Services} />
          <Route path="/about/" component={About} />
          <Route path="/blog/" component={Blog} />
          <Route path="/contact/" component={ContactUs} />
        
      </div>
    </Router>

  );
}

export default App;
