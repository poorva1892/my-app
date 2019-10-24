import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
     } from 'reactstrap';
  
  import logo from './images/logo.png';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
           
            <Navbar color="light" light expand="sm" class="navigation">
            <img src={logo} alt="Logo" />
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                  <NavLink className="list" href="/#">Home</NavLink>
                  </NavItem>
                 
                  <NavItem>
                  <NavLink className="list" href="About/components/">About Us</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink className="list" href="Services/components/">Solutions / Services</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink className="list" href="Work/components/">Our Work</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink className="list" href="Contact_form/components/">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            </div>
            );
            }
            }