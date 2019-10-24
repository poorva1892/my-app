import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Background from './images/1.jpg'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import Navigation from './navbar';
import image1 from './images/web_development.png'
 import image2 from './images/application_development.png'
 import image3 from './images/digital.jpg'
 import image4 from './images/database_icon-300x300.png'
 import { Progress } from 'reactstrap';
 import { Jumbotron } from 'reactstrap';
 import Footer from './footer'
import Work from './work'
export default class About extends React.Component {

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
              
              <Navigation></Navigation>

      <Container fluid >
        <Row style={{backgroundImage:"url(" + Background + ")",
        backgroundRepeat:'no-repeat',backgroundSize:'cover',
        height:'300px',
        
        // transform:'skew(180deg,70deg)',
        marginTop:'-0px'
        
        }}>
          <Col> <h1 style={{color:'white',textAlign:'center',marginTop:'100px'}}>About Us</h1></Col>
        </Row>
        <Row>
        </Row>
        <br />                                                                                                                                                                                                  

        </Container><br />
        <Container>
        <h2 style={{ textAlign:'center',color:'#1F95EF'}}>What we do...</h2><br />

          <Row>
<Col sm="12" xs="12">
<p style={{textAlign:'center'}}>We develop innovative software solutions that exceed the demands of your company.</p>
</Col></Row>
          <br/><br />
          <Row>
          <Col sm="12" xs="12" md={{ size: 9, offset: 3 }}></Col>
          <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Mobile Developement
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            Mobile Application
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Digital Marketing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
            Database Developement
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
            <Col sm="6" xs="12">
              <br />
                <h2>Web Development.</h2><br />
                <img src={image1} className=" img-fluid" alt="" />
               
            </Col>
              <Col sm="6" xs="12">
              <br /> <br /> <br />
              <p>  We offer high performance, user friendly, well integrated and creative websites for our clients. Whether your business is just starting out, 
                or has been established for years, a website is a powerful asset and a necessity in today’s 
                competitive market.
                <br />
                <br />
                <h2 style={{ textAlign:'center',color:'#1F95EF'}}>Responsive Design</h2>
                <br />
<Progress animated color="info" value="50" />
<br />
</p>
    
           </Col>  
            </Row>
            <br /><br/>
            <Row>
              <Col sm="12" xs="12">
              <p>Mobile devices make up more than 50% of all web traffic, so shouldn’t your website accommodate the majority? We think so too. We design all of our websites to be responsive – meaning regardless on the device you’re on, your website will be optimized to look the best.<br />

Responsive designs not only allow your website to be viewed on any device, but also gives your business an edge over the competition.<br /><br />
<h2 style={{ textalign:'left',color:'#1F95EF'}}>Custom Design...</h2>

The design of a website should be as unique as your business. That’s why you won’t find recycled code or template designs here. In order to give you the best design, we research your target market, potential customers, and industry. We then will meet with you to get a clear, concise design that perfectly reflects your business.<br /> <br />

We design your website with your business goals in mind. Like anything in business, making a decision often comes down to the return on investments. If your goal is to get more customers, increase profit margins, or generate more revenue, our approach to the design and development of your website can help you achieve those goals. We are dedicated to web solutions that serve a purpose.</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Jumbotron>
            <Row>
              <Col sm="6" xs="12">
              <div>
      
      <br />
        <h2>Mobile Developement</h2><br /><br />
        <p>Mobile apps are growing exponentially in popularity. Whether you’re a startup looking to create buzz around your new product, or a well-known brand seeking the best way to engage a new generation or develop a new income stream, a great mobile app should be considered a vital component of your overall marketing plan.

We develop mobile applications for Apple’s iOS and Google’s Android..

</p><br /><br />
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      
    </div>
              </Col>
              <Col sm="6" xs="12">
              <img src={image2} className=" img-fluid" alt="" />

              </Col>
            </Row>
            </Jumbotron>
          </TabPane>
          <TabPane tabId="3">
            <Row>
            <Col sm="6" xs="12">
                <Card body>
                <img src={image3} className=" img-fluid" alt="" />
                </Card>
              </Col>
              <Col sm="6" xs="12">
                <Card body>
                  <CardTitle>Digital Marketing Services</CardTitle>
                  <CardText>
Looking for a Result Based Digital Marketing Agency? Tekweb Digital Marketing Agency with Services like SEO, SEM, SMO, Creative, E-commerce. Paid Search.</CardText>
                  <Button>Read more....</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
            
              <Col sm="6" xs="12">
                <Card body>
                  <br /><br /><br />
                  <CardTitle><h2>Database Development.</h2></CardTitle>
                  <CardText>We help business, small and large, achieve fast and efficient database solutions. Whether you need a cloud application, SaaS development, or anything in between; We have the ability and know-how to tackle any database solution your company may be looking for.</CardText>

                  <Button>Read More...</Button>
                </Card>
              </Col>
              <Col sm="3" xs="12" style={{marginLeft:'60px'}}>
              <br /><br />
            <img src={image4} className=" img-fluid" alt="" /></Col>

            </Row>
            
          </TabPane>
        </TabContent>
        </Row>
          </Container>
          <br /> <br />
          <Work></Work>
       <Footer></Footer>
            </div>
        );
    }
}