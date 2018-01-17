import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';
import Header from '../header';
import Grid from '../grid'

class Home extends Component {
  render() {
    return (
      <div>
        <div class="grid">
          <div class="row">
          <div class="col-xs4-24 col-xs8-24 col-sm8-24 col-sm-24 col-md-24 col-lg-24 col-xl-24">

              <Header />
            </div>

          </div>
          <div class="row">
            <div class="col-xs4-24 col-xs8-24 col-sm8-24 col-sm-24 col-md-24 col-lg-24 col-xl-24">
              <Grid />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
