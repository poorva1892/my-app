import React from 'react'  
import {Container,
Row,Col,Button} from 'reactstrap'                                                                              
import { Card, CardTitle, CardText} from 'reactstrap';
import './index.css'
import Services from './services'

export default class Footer extends React.Component{
  render() {
    return (
    <div>
      <br />
      <h2 style={{ textAlign:'center',color:'#1F95EF',textDecoration:'underline'}}>TekWeb.in | Web soltion for business</h2>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        <Container fluid>
        
        <Row className ="how-section1" >
       
          <Col xs="12" sm="6" >
        <br /> <br /> <br /> 
              <img src="./images/web-development-companies.jpg"  className="img-fluid" alt="" />
       </Col>
          <Col xs="12"  sm="6">    
              <h4>About                                                                                                                                                                           </h4>
              <h4 className="subheading">TekWeb.in is powered by TekFoster Business Services Pvt. Ltd located in Chinchwad, Pune. India..</h4>
              <p className="text-muted"> We provide web based business solutions for companies, small business owners and startup companies. 
We offer cost effective, Imapctfull, easy to sclae business website and mobile application solutions also we offer social media marketing campeign, Website SEO services and hosting services.                                                                                                                                                                                                                                                                                                                                                                                                                              

We have experties in static website design, Dynamic website desigm, E-commerce design, Mobile App development Social media marketing , Search Engine Optimization & Hosting Services Reach us with your design requiments and together we can desgin awesome website and mobile applications..</p>

          </Col>
       
        </Row>
         
         
        <h2 style={{ textAlign:'center',color:'#1F95EF'}}>We Specialize in Offering Complete Web Solutions for Business
</h2>    
<br /><br />
        <Row>

              <Col sm="3" xs="12">

      <Card body outline color="secondary" className="card1">
        <CardTitle>      BUILD YOUR WEBSITE<br />
WEB DEVELOPMENT SERVICES</CardTitle>
        <CardText>Informative Website<br />
Dynamic Website<br />
E-Commerce Website<br />
Website Redesign<br />
*FREE HOSTING + SEO <br />
WEBSITE FROM @₹ 999*/- ONLY.</CardText>
        <Button color="info" href="Services/components">Read More.</Button>
      </Card>
      </Col>
     

      <Col sm="3" xs="12">
      <Card body outline color="primary" className="card1">
        <CardTitle> DRIVE YOUR BUSINESS<br />
APP DEVELOPMENT SERVICES </CardTitle>
        <CardText>Android APP Development <br />
IOS APP Development <br />
Multiplatform APP Development <br />
*APP FROM @ ₹ 8000*/- ONLY.</CardText>
<br />
<Button color="info" href="Services/components">Read More.</Button>      </Card>
      </Col>
      <Col sm="3" xs="12">
      <Card body outline color="success" className="card1">
        <CardTitle>      REACH MORE CUSTOMERS <br />
DIGITAL MARKETING SERVICES</CardTitle>
        <CardText>Google Paid Per Click Campaign <br />
Facebook Add Campaign <br />
Facebook Page Pramotions <br />
*FREE WEBSITE AUDITING <br />
*FREE CONSULTATION.</CardText>
<br />
<Button color="info"  href="Services/components">Read More.</Button>      </Card>
 
      

      </Col>
      <Col sm="3" xs="12">
      <Card body outline color="info" className="card1">
        <CardTitle> GO ONLINE <br />
WEB HOSTING SERVICES</CardTitle>
        <CardText>Shared Hosting <br />
Cloud Hosting <br />
VPS Hosting <br />
*FREE SSL <br />
*EAZY MIGRATIONS.</CardText>
<br /><br />
<Button color="info"  href="Services/components">Read More.</Button>      </Card>
      </Col>
 
       </Row>
       <br /><br />
      </Container>
    </div>
   
  );
}
}