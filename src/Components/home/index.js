import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';
import Header from '../header';
import Grid from '../grid'

class Home extends Component {
  render() {
    return (
      <div>
          <div>

              <Header />
            </div>
            <div>

              <Grid />
        </div>
      </div>
    );
  }
}

export default Home;
