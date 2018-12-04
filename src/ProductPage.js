import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';


class Products extends Component {
  render() {
    return <div>
      ProductPage
      <pre>{JSON.stringify(this.props)}</pre>
      
    </div>;
  }
}

export default Products;