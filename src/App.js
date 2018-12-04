import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './Navbar';
import ProductDetails from './ProductDetails';
import Products from './Products';
import Cart from './Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Switch> 
        <Route
          exact
          path='/products'
          render={() => <Products />}/>
        
        <Route
          exact
          path = '/products/:id'
          render={(props) => <ProductDetails {...props} />}/>
        
        <Route
          exact
          path = '/cart'
          render={() => <Cart />}/>

        <Route 
          path='/'
          render={() => <Redirect to={'/products'} />}/>
          
        <Route 
          path='/'
          render={() => <Redirect to={'/products'} />}/>
      </Switch>
      </div>
    );
  }
}

export default App;