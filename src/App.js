import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './Navbar';
import ProductDetails from './ProductDetails';
import Shop from './Shop';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Switch> 
        <Route
          exact
          path='/products'
          render={() => <Shop route={'products'} />}/>
        
        <Route
          exact
          path = '/products/:id'
          render={(props) => <ProductDetails {...props} />}/>
          
        <Route
          exact
          path = '/cart'
          render={() => <Shop route={'cart'} />}/>

        <Route 
          path='/'
          render={() => <Redirect to={'/products'} />}/>
      </Switch>
      </div>
    );
  }
}

export default App;