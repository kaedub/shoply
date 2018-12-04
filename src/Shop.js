import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { addProduct } from './actions';
import ProductsList from './Products';
import Cart from './Cart';


class Shop extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    this.setState({loading: false});
  }

  render() {
    if (this.state.loading) return <h4>Loading...</h4>
    return (
      <Container>
        SHOP
        <pre>Props: {JSON.stringify(this.props)}</pre>
        <pre>State: {JSON.stringify(this.state)}</pre>
        
        { this.props.route === 'cart' ?
        <Cart/> :
        <ProductsList/>}
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  console.log('map state to props ran with', state)
  return {products: state.products};
}

export default connect(
  mapStateToProps,
  {addProduct})(Shop);