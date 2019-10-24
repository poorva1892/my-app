import React, { Component } from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './contact'
import About from './about'
import Home from './home'
import Footer from './footer'
import Navigation from './navbar'
import Work from './work'
import Pricing from './pricing-table'

export default class App extends React.Component {

  render() {
    return (
      <div>
       
                <Navigation></Navigation>
                <Contact></Contact> 
                <Home></Home>  
                <Footer></Footer>       
                
                                                                                                                                                     
            </div>
        );
    }
}

