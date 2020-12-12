import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Header } from './Header';
import './Style/Layout.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className ='layout'>
        <Header />
        <NavMenu />
        <Container className ='body'>
          {this.props.children}
        </Container>
      </div>
    );
  }
}