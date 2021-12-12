import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useStyles from './Rating.styles';
import { useMediaQuery } from '@material-ui/core';
import theme from '../../theme';

interface RatingProperty {
  rating: number;
}

const Rating = ({ rating }: RatingProperty) => {
  const classes = useStyles();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const size = isSm ? 'h6' : 'h4';
  const textSize = isSm ? 'medium' : 'large';

  return (
    <Grid
      container
      direction={isSm ? 'row' : 'column'}
      justifyContent="flex-start"
      alignItems="center"
    >
      <ArrowUpwardIcon fontSize={textSize} className={classes.up} />
      <Typography className={classes.typography} variant={size}>
        {rating}
      </Typography>
      <ArrowDownwardIcon fontSize={textSize} className={classes.down} />
    </Grid>
  );
};

export default Rating;
