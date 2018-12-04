import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Navbar';
import ProductPage from './ProductPage';
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
          render={() => <ProductPage route={'cart'} />}/>
          
        <Route
          exact
          path = '/cart'
          render={() => <Shop route={'cart'} />}/>

      </Switch>
      </div>
    );
  }
}

export default App;