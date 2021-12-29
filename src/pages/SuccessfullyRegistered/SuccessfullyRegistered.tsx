import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './SuccessfullyRegistered.styles';
import Link from '../../components/Link';

const SuccessfullyRegistered = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        item
        xs={10}
        md={8}
      >
        <Paper className={classes.paper} variant="outlined">
          <Typography variant="h6" align="center">
            You have been successfully registered. Check your email for account
            confirmation.
          </Typography>
          <Typography variant="body1" align="center">
            <Link to="/main" label="Click here " />
            to come on main page.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SuccessfullyRegistered;
