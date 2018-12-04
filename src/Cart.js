import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Row, Col } from 'reactstrap';
import './Cart.css';

class Cart extends Component {
  render() {
    console.log('props', this.props);
    console.log('state', this.state);
    return <div>
      <Container>
        {this.props.cart.map(item => {
          return <div className="cart-item">
              <Row className="cart-button-group">
                <Col><h1>{item.name}</h1></Col>
                <Col><Button color="danger">Remove From Cart</Button></Col>
              </Row>
            </div>
        })}
      </Container>
    </div>;
  }
}

function mapStateToProps(state, props) {
  console.log('mstp', state)
  return {cart: state.cart};
}

export default connect(mapStateToProps)(Cart);