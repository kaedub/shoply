import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';
import './Products.css';


class Products extends Component {
  render() {
    return (
    <Container className="Products">
      <h1>Products</h1>
      <Row>
      {this.props.products.map(prod => {
        return (
        <Col className="my-3" xs="12" sm="12" md="6" lg="4" xl="4">
        <Card className="Card p-3">
          <div className="card-img-box">
          <Link to={`/products/${prod.id}`} className="Link">
            <CardImg 
              top 
              className="CardImg"
              src={prod.image_url} 
              alt="Card image cap" />
          </Link> 
          </div> 
          <CardBody>
            <Link to={`/products/${prod.id}`} className="Link">
              <CardTitle>{prod.name}</CardTitle>
            </Link>
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
    </Container>);
  }
}

function mapStateToProps(state, props) {
  return {products: state.products}
}

export default connect(mapStateToProps)(Products);