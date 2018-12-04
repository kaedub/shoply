import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const currentProduct = this.props.products.find(p => p.id === id);
    if (currentProduct)
      this.setState({
          currentProduct,
          loading: false,
      });
  }

  render() {  
    console.log('render ran', this.props, this.state)
    if (this.state.loading) return <h1>Loading...</h1>
    return (
    <Container>
      <Button 
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
      <Button className='px-5'>Add To Cart</Button>
    </Container>
    );
  }
}
function mapStateToProps(state, props) {
  console.log("mapStateToProps in ProductDetails", state)
  return {products: state.products}
}

export default connect(mapStateToProps)(ProductDetails);