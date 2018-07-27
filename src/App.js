import React, { Component } from 'react';
import Section from './components/Section';
import Item from './components/Item';
import Promo from './components/Promo';
import Store from './store';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productDetails : Store.getProductDetails()
    }
    
    //Events Binding

  }

  componentWillMount() {
    Store.on("promoAdded", () => {
      this.setState({
        productDetails : Store.getProductDetails()
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="checkOutSection">
          <Section sectionContent={ this.state.productDetails }/>
          <Item sectionContent={ this.state.productDetails }/>
          <Promo />
        </div>
      </div>
    );
  }
}

export default App;
