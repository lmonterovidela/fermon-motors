import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Dream = ({ classes }) => (
  <Grid
    container
    className={classes.dreamContainer}
    justify="center"
    alignItems="center"
    direction="column"
  >
    <Grid item md={6}>
      <Grid container justify="center" alignItems="center">
        <Typography type="headline" className={classes.dreamText} gutterBottom>
          Siempre hemos querido ayudar a los adolescentes a gestionar su dinero.
        </Typography>
      </Grid>
    </Grid>
    <Grid item md={6}>
      <Grid container justify="center" alignItems="center">
        <Typography type="headline" className={classes.dreamText} gutterBottom>
          Ayudarlos a que puedan convertirse en
          adultos más conscientes y exitosos, desde
          el punto de vista social y económico.
        </Typography>
      </Grid>
    </Grid>
    <Grid item md={6}>
      <Grid container>
        <Typography type="display1" className={classes.dreamTextTintina}>
          Dile Hola a Tintina 👋
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

Dream.propTypes = {
  classes: PropTypes.shape({}),
};
export default Dream;
