import React, { Component } from 'react';
import { } from 'reactstrap';


class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('props', this.props)
  }

  render() {  
    return <div>
      ProductDetails
      <pre>Props:{JSON.stringify(this.props)}</pre>
      
    </div>;
  }
}

export default ProductDetails;