import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Component/Layout';
import { Home } from './Component/Home';
import { Animals } from './Component/Animals';
import { Cars } from './Component/Cars';
import { Cartoons } from './Component/Cartoons';
import { Diwali } from './Component/Diwali';
import { Movies } from './Component/Movies';
import { Nature } from './Component/Nature';


class App extends Component {
    static displayName = App.name;
  
    render () {
      return (
        <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/Animals' component={Animals} />
        <Route exact path='/Cars' component={Cars} />
        <Route exact path='/Cartoons' component={Cartoons} />
        <Route exact path='/Diwali' component={Diwali} />
        <Route exact path='/Movies' component={Movies} />
        <Route exact path='/Nature' component={Nature} />
      </Layout>
      );
    }
  }

  export default App;