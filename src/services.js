
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import serv from './images/website-development.jpg'
import Navigation from './navbar';
import Social from './social-card'
import Footer from './footer'
import Pricing from './pricing-table';
export default class Services extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
      <Container fluid> 
        <Navigation></Navigation>
       
       <img src={ serv }  className="img-fluid" alt="serv" style={{width:'100%'}}/>
       <br/><br/> <br/><br/>
     
 </Container>
 <Pricing></Pricing>
 <br /> <br />
 <Container>
 <Row>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              WEB DEVELOPEMENT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              MOBILE APPLICATION
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              DIGITAL MARKETING
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              WEB HOSTING
            </NavLink>
          </NavItem>
       
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <br />  <br />
          <h2>Web Development</h2>
          <br /> <br />
          <Row>
          <Col xs="12" sm="4">
          <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
         <p>Mini Information Website</p> 
          One page mini website for small business 
Create your own online digital identity @ Rs.999*/-only
          </ToastHeader>
          <ToastBody>
          <Toast>
        <ToastHeader icon="primary">
         Single Page Werbsite
        </ToastHeader>
        <ToastHeader icon="primary">
         Responsive Design
        </ToastHeader>
         <ToastHeader icon="primary">
         Business Image Gallery
        </ToastHeader>
        <ToastHeader icon="primary">
         Google map Address
        </ToastHeader>
      </Toast>
           
          </ToastBody>
        </Toast>
      </div>
          </Col>
          <Col xs="12" sm="4">
          <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
          <p>Simple Informative Static Website</p>
          Simple informative professional business website 
Get your business online and reach more customers!
          </ToastHeader>
          <ToastBody>
          <Toast>
        <ToastHeader icon="danger">
        Multi Page Werbsite
        </ToastHeader>
        <ToastHeader icon="danger">
         Business Sliders
        </ToastHeader>
         <ToastHeader icon="danger">
         Website on page SEO
        </ToastHeader>
        <ToastHeader icon="danger">
         Social media Links
        </ToastHeader>
      </Toast>
          </ToastBody>
        </Toast>
      </div>
          </Col>
          <Col sm="4" xs="12">
          <div className="p-3 bg-success my-2 rounded">
        <Toast>
          <ToastHeader>
           <p>Adv Informative Static Website</p> 
           Advance informative professional business website 
Get business leads from website to your mailbox!
          </ToastHeader>
          <ToastBody>
          <Toast>
        <ToastHeader icon="warning">
        Multi Page Werbsite
        </ToastHeader>
        <ToastHeader icon="warning">
       Real web chatting
        </ToastHeader>
         <ToastHeader icon="warning">
    Website on page SEO
        </ToastHeader>
        <ToastHeader icon="warning">
         Enquiry Form
        </ToastHeader>
      </Toast>
          </ToastBody>
        </Toast>
      </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
          <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>
           <p>Simple Dynamic Website</p> 
           Simple Dynamic professional business website 
Manage business from your own admin panel
          </ToastHeader>
          <ToastBody>
          <Toast>
        <ToastHeader icon="dark">
        Dynamic Website
        </ToastHeader>
        <ToastHeader icon="dark">
       Admin Dashboard
        </ToastHeader>
         <ToastHeader icon="dark">
    Website on page SEO
        </ToastHeader>
        <ToastHeader icon="dark">
         Social Media Links
        </ToastHeader>
      </Toast>  
              </ToastBody>
        </Toast>
      </div>
          </Col>
          <Col xs="12" sm="4">
          <div className="p-3 bg-warning my-2 rounded">
        <Toast>
          <ToastHeader>
            <p>E-Commerce Website</p>

Fully loaded E-Commerce website 
Sell your products and services online.<br />
          </ToastHeader>
          <ToastBody>
          <Toast>
        <ToastHeader icon="success">
        Dynamic Website
        </ToastHeader>
        <ToastHeader icon="success">
       Business Dashboard
        </ToastHeader>
         <ToastHeader icon="success">
    Online Payment
        </ToastHeader>
        <ToastHeader icon="success">
         Email Notification
        </ToastHeader>
      </Toast>
          </ToastBody>
        </Toast>
      </div>
          </Col>
          
        </Row>
        
          </TabPane>
          <TabPane tabId="2">

<br /><br />
         <h2 style={{textAlign:'center'}}>Android Application Development</h2>
         <br />

         <p>Our mobile applications drive customer business
Get your customized business mobile app at best rates</p>
<br />
<Row>
<Col sm="4" xs="12">
<Toast>
        <ToastHeader icon="success">
        Dynamic Content App
        </ToastHeader>
        <ToastHeader icon="success">
       customized Design
        </ToastHeader>
         <ToastHeader icon="success">
Admin Dashboard
        </ToastHeader>
        <ToastHeader icon="success">

Online Payment System        </ToastHeader>
      </Toast>
</Col>
<Col sm="4" xs="12">
<Toast>
        <ToastHeader icon="success">
        Social Media Login
        </ToastHeader>
        <ToastHeader icon="success">
       Playstore Registration
        </ToastHeader>
         <ToastHeader icon="success">
Email/sms Notification
        </ToastHeader>
        <ToastHeader icon="success">

Online Payment System        </ToastHeader>
      </Toast>
</Col>
  
</Row>
          </TabPane>
          <TabPane tabId="3">
          <br /><br />
          <h2>Digital Marketing</h2>

<br /><br />
        
      
         <p style={{textAlign:"center"}}>Business that Ignore Social Media Run Shorter
Make Best Imapact for your Business on Social Media...</p>
<br />
<Row>
<Col sm="5" xs="12">
<Toast>
        <ToastHeader icon="success">
        Customized Marketing Plan
        </ToastHeader>
        <ToastHeader icon="success">
       Higher conversation rates
        </ToastHeader>
         <ToastHeader icon="success">
Google Analytics plugin
        </ToastHeader>
        <ToastHeader icon="success">
Result Report Sharing</ToastHeader>
      </Toast>
</Col>

  
</Row>
          </TabPane>
          <TabPane tabId="4">
          <br /><br />
          <h2>Web hosting</h2>

<br /><br />
        
<p> Customized website hosting services 
Take your business online @ best rate</p>

<Row>
<Toast>
        <ToastHeader icon="success">
        Customized Marketing Plan
        </ToastHeader>
        <ToastHeader icon="success">
       Higher conversation rates
        </ToastHeader>
         <ToastHeader icon="success">
Google Analytics plugin
        </ToastHeader>
        <ToastHeader icon="success">
Result Report Sharing</ToastHeader>
      </Toast>
</Row>
          </TabPane>
        </TabContent>
      </div>
    </Row>
 
        </Container>
<Social></Social>
  <Footer></Footer>     
      </div>
    );
  }
}