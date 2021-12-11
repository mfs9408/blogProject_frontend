import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useStyles from './Rating.styles';

interface RatingProperty {
  rating: number;
}

const Rating = ({ rating }: RatingProperty) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <ArrowUpwardIcon fontSize="large" className={classes.up} />
      <Typography className={classes.typography} variant="h4">
        {rating}
      </Typography>
      <ArrowDownwardIcon fontSize="large" className={classes.down} />
    </Grid>
  );
};

export default Rating;
