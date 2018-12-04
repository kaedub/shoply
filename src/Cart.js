import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    console.log('props', this.props);
    console.log('state', this.state);
    return <div>
      {this.props.cart.map(item => {
        return <h1>{item}</h1>
      })}
    </div>;
  }
}

function mapStateToProps(state, props) {
  return {cart: state.cart};
}

export default connect(mapStateToProps)(Cart);