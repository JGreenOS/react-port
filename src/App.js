import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



function App() {
  return ( 
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path='/contact' component={Contact}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/' component={Home} />
      </Switch>
        </Router>
   

    <div className="App">
    
 
 
      <Footer />
    </div>
    </>
  );
}

export default App;
