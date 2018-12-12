import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';
import './Products.css';

const capitalize = s => s.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

class Products extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }
  
  isCategory(category) {
    console.log('iscat', this.props.query, category, this.props.query === category || !this.props.query);
    return this.props.query === category || !this.props.query;
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>
    return (
      <React.Fragment>
        <section className="page-header bg-primary text-light py-1">
          <Container>
            <h1>Browse Products</h1>
            <p>Category: {this.props.query ? capitalize(this.props.query) : 'all'}</p>
          </Container>
        </section>
        <Container className="Products">
          <Row>
          {this.props.products.map(prod => {
          return (!this.isCategory(prod.category) ? '' :
            <Col key={prod.id} className="my-3" xs="12" sm="12" md="6" lg="4" xl="4">
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
                  <CardTitle>{capitalize(prod.name)}</CardTitle>
                </Link>
                <CardText>Price: ${prod.price}</CardText>
                <CardText>Category: {capitalize(prod.category)}</CardText>
                <CardText>
                  <small className="text-muted">Last updated 5 hours ago</small>
                </CardText>
              </CardBody>
            </Card>
            </Col>
            );
          })}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  return {products: Object.keys(state.products).map(key => state.products[key])}
}

export default connect(mapStateToProps)(Products);