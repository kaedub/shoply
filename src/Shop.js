import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import PRODUCTS from './data.json';
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
    this.setState({products: PRODUCTS, loading: false});
  }

  render() {
    if (this.state.loading) return <h4>Loading...</h4>
    return (
      <Container>
        SHOP
        <pre>Shop: {JSON.stringify(this.props)}</pre>
        
        { this.props.route === 'cart'?
        <Cart products={this.state.products} /> :
        <ProductsList products={this.state.products}/>}
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return [];
}

export default connect(mapStateToProps)(Shop);