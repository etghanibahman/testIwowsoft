import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {calculator} from './components/calculator/calculator'
import {shape} from './components/shape/shape'
import {CelsiusFahrenheit} from './components/CelsiusFahrenheit/CelsiusFahrenheit'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/calculator' component={calculator} />
        <Route path='/shape' component={shape} />
        <Route path='/Convert' component={CelsiusFahrenheit} />
      </Layout>
    );
  }
}
