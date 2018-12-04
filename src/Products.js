import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';


class Products extends Component {
  render() {
    return <div>
      Products
      <pre>{JSON.stringify(this.props)}</pre>
      <Row>
      {this.props.products.items.map(prod => {
        return (
        <Col className="Products img-thumbnail my-3" xs="12" sm="6" md="4">
        <Card className="p-3">
          <Link to={`/products/${prod.id}`}>
            <CardImg top width="100%" src={prod.image_url} alt="Card image cap" />
          </Link>  
          <CardBody>
            <CardTitle>{prod.name}</CardTitle>
            <CardText>Price: ${prod.price}</CardText>
            <CardText bottom>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        </Col>
        )
      })}
      </Row>
    </div>;
  }
}

export default Products;