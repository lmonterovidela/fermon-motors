/* application bar de la aplicacion */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import grey from 'material-ui/colors/grey';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = () => ({
  flex: {
    flex: 1,
    fontFamily: 'Pacifico',
    fontSize: 24,
    color: '#FFF',
  },
  appBar: {
    backgroundColor: grey[900],
  },
});

const AppBarComponent = ({ classes }) => (
  <AppBar position="fixed" color="default" className={classes.appBar}>
    <Toolbar>
      <img
        src='../../static/logo.png'
        role="presentation"
        style={{ height: 30, marginRight: 10 }}
      />
      <Typography type="title" className={classes.flex}>
        Fermon Motors
      </Typography>
      <Button href="#description" color="contrast">Descripción</Button>
      <Button href="#contact" color="contrast">Registro</Button>
    </Toolbar>
  </AppBar>
);

AppBarComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(AppBarComponent);
