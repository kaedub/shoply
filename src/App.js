import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './Navbar';
import ProductDetails from './ProductDetails';
import Products from './Products';
import Cart from './Cart';

/** Some makeshift hacked together query string parser */
function parseQueryString(s) {
  return s.slice(1).split('&')[0].split('=')[1];
}

class App extends Component {
  render() {
    console.log('App Render')
    return (
      <div className="App">
      <NavBar />

      <Switch> 
        <Route
          exact
          path='/products'
          render={props => {
            return <Products 
              {...props} 
              query={parseQueryString(props.location.search)} 
            
        />}}/>
        
        <Route
          exact
          path = '/products/:id'
          render={props => <ProductDetails {...props} />}/>
        
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