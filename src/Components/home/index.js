import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';

import styles from '../styles';
import logo from '../../logo.svg';
import Header from '../header';
import GridImg from '../grid'
import Middle from '../middle'


class Home extends Component {
  render() {
    return (
      <Grid container align="center" justify="center" spacing={0}>
        <Header />
        <GridImg />
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
