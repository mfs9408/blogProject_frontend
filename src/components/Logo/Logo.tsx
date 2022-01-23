import React from 'react';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './Logo.styles';

interface LogoProps {
  desktop?: boolean;
}

const Logo = ({ desktop }: LogoProps) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" item xs={3}>
      {desktop && <DoubleArrowIcon color="secondary" />}
      <Grid item className={classes.name}>
        <Typography variant="h5" color="secondary">
          HUB
        </Typography>
      </Grid>
      {desktop && (
        <Grid item>
          <Typography color="secondary" variant="overline">
            BETA
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Logo;
