import React from 'react';
import w1 from './images/w1.jpg'
import w2 from './images/w2.jpg'
import w3 from './images/w3.jpg'
import w4 from './images/w4.jpg'
import w5 from './images/w5.jpg'
import w6 from './images/w6.png'
import w7 from './images/w7.jpg'
import w8 from './images/w8.png'
import w9 from './images/w9.png'

export default class Work extends React.Component {
  render() {
    return (
        <div>

 <div className="container mt-40">
 <h2 style={{ textAlign:'center',color:'#1F95EF',textDecoration:'underline'}}>Latest Projects and Demo Websites</h2>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
 <br /> <br />
 
 <div className="row mt-30">
            <div className="col-sm-12 col-md-4">
              <div className="box20 yellow">
              <img src={w1} className=" img-fluid" alt="" width='300px' height='300px' />
                
                <div className="box-content">
                  <h3 className="title">Professional Consultant Website
CA,Lawyer,Businessman Professional services</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box20 yellow">
              <img src={w2} className=" img-fluid" alt="" width='300px' height='300px'  />
                <div className="box-content">
                  <h3 className="title">INDUSTRIAL WEBSITE
Mechanical and Fabrications
Permalink</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box20 yellow">
              <img src={w3} className=" img-fluid" alt="" />
                <div className="box-content">
                  <h3 className="title">TEMPLE WEBSITE DESIGN
Temple & Trust website</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box20 yellow">
              <img src={w4} className=" img-fluid" alt="" />
                <div className="box-content">
                  <h3 className="title">PRIVATE SECURITY WEBSITE
Security agency services</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box20 yellow">
              <img src={w5} className=" img-fluid" alt="" />
                <div className="box-content">
                  <i className="fas fa-clinic-medical circle-icon" />
                  <h3 className="title">TOURS & TRAVEL WEBSITE
Tour & Travels agency</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box20 yellow">
              <img src={w6} className=" img-fluid" alt="" />
                <div className="box-content">
                  <h3 className="title">E-COMMERCE STORE
Online product selling website</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box20 yellow">
              <img src={w7} className=" img-fluid" alt="" />
                <div className="box-content">
                  <h3 className="title">ONLINE JWELLARY STORE WEBSITE
Jwellary Designers & Sellers</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box20 yellow">
              <img src={w9} className=" img-fluid" alt="" />
                <div className="box-content">
                  <h3 className="title">EDUCATIONAL WEBSITES
School & Colleges websites</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box20 yellow">
              <img src={w8} className=" img-fluid" alt="" />
                <div className="box-content">
                  <h3 className="title"CONSTRUCTION PROJECT WEBSITE>
Real estate,Construction Services & Builders</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    );
  }
}