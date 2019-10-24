
import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route,  BrowserRouter as Router } from 'react-router-dom'  
import './index.css';  
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';  
import Contact   from './contact'
import Home from './home'
import Contact_form from './contact_form' 
import Services from './services'
import About from './about'
import Work from './work'
const routing = (  
  <Router> 
    <div>  
      
      <Route exact path="/" component={App} />  
      <Route path="/contact" component={Contact} />  
      <Route path="/home" component={Home} />
      <Route path="/contact_form" component={Contact_form} />  
      <Route path="/services" component={Services} />
      <Route path="/About" component={About} />
      <Route path="/work" component={Work} />

    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  