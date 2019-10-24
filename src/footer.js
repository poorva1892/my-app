import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from './navbar';

export default class Footer extends React.Component {
    render() {
        return (
          <div>
                
          
            <Container fluid>
             
                <section id="footer">

            <div className="row text-center text-xs-center text-sm-center text-md-center">
              <div className="col-xs-12 col-sm-4 col-md-4">
              <h5 style={{textAlign:"center"}}>TEKWEB | BUSINESS SOLUTIONS</h5>

                <ul className="list-unstyled quick-links">
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Reach us for business <br /><br />

D/701, Sukhwani Pacific <br />
Chinchwad, Pune. <br />
Phone: +91 9156 288 054<br />
E-mail: info@tekweb.in</a></li>
                 
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="/#"><i className="fa fa-angle-double-right" />Home</a></li>
                  <li><a href="About/components"><i className="fa fa-angle-double-right" />About</a></li>
                  <li><a href="Services/components"><i className="fa fa-angle-double-right" />Services</a></li>
                  <li><a href=" contact_form/components"><i className="fa fa-angle-double-right" />Contact</a></li>
                </ul>
                
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Our Services</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="Services/components"><i className="fa fa-angle-double-right" />Web Development</a></li>
                  <li><a href="Services/components"><i className="fa fa-angle-double-right" />Mobile Development</a></li>
                  <li><a href="Services/components"><i className="fa fa-angle-double-right" />Digital Marketing</a></li>
                  <li><a href="Services/components"><i className="fa fa-angle-double-right" />Web Hosting</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <p style={{textAlign:'center',color:'white'}}>FOLLOW OUR SOCIAL MEDIA PAGES & STAY TUNED WITH LATEST NEWS, UPDATES, PRAMOTIONAL OFFERS & DISCOUNTS </p>
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook" /></a></li>
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter" /></a></li>
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram" /></a></li>
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus" /></a></li>
                  <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope" /></a></li>
                </ul>
              </div>
            </div>	
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p><u><a href="/#">Copyright © 2019. TekWeb.in. All rights reserved</a></u> </p>
              </div>
            </div>	
          
        </section>
        </Container>
        </div>
        
              
            
        );
    }
}