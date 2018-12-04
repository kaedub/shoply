import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions';
import { Container, Media, Button } from 'reactstrap';
import './ProductDetails.css';


class ProductDetails extends Component {

  constructor(props) {
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount() {    
    const id = +this.props.match.params.id;
    console.log('mount', this.state)
    this.setState({
        id,
        currentProduct: this.state.products,
        loading: false,
    });
  }

  handleAddToCart = evt => {
    // let product
    this.props.addToCart(this.state.id); 
  }

  render() {  
    console.log('details', this.props)
    if (this.state.loading) return <h1>Loading...</h1>
    return (
    <Container>
      <Button 
        color="warning"
        onClick={() => this.props.history.push('/products')} 
        className='my-3'>Back
      </Button>
      <Media className='py-5'>
        <Media  left href="#">
          <img className="product-img" src={this.state.currentProduct.image_url} alt="product"/>
        </Media>
        <Media body>
          <br/>
          <Media heading>
            {this.state.currentProduct.name}
          </Media>
          Price: ${this.state.currentProduct.price}
        </Media>
      </Media>
      <Button onClick={this.handleAddToCart} color="primary" className='px-5'>Add To Cart</Button>
    </Container>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('mstp', state)
  return {products: state.products}
}

export default connect(
  mapStateToProps,
  {addToCart}
)(ProductDetails);