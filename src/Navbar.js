/** 
 * This Component is the example from https://reactstrap.github.io/components/navbar/
 * with some modifications
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  Collapse, 
  Navbar, 
  Badge, 
  NavbarBrand, 
  NavbarToggler,
  Nav, 
  NavItem, 
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavBar  extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
      

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <Link to="/">
            <NavbarBrand href="#" className="mr-auto">Shoply</NavbarBrand>
          </Link>

          {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> */}
          {/* <Collapse isOpen={!this.state.collapsed} navbar> */}
            <Nav>
              <NavItem className="my-auto">
                <Link to="/cart">
                  Cart <Badge color="secondary">{this.props.cart_count}</Badge>
                </Link>
              </NavItem>
            
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Products
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    <Link to="/products">All Products</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/products?category=appliances">Appliances</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/products?category=electronics">Electronics</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/products?category=furniture">Furniture</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> 
            </Nav>
          {/* </Collapse> */}
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {cart_count: state.cart.length};
}

export default connect(mapStateToProps)(NavBar);