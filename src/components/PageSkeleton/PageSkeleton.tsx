import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './PageSkeleton.styles';

const PageSkeleton = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="body2" component="div">
          <Skeleton animation="wave" height={50} />
        </Typography>
        <Typography variant="h4" component="div">
          <Skeleton animation="wave" />
        </Typography>
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={150} />
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="body2" component="div">
          <Skeleton animation="wave" height={50} />
        </Typography>
        <Typography variant="h4" component="div">
          <Skeleton animation="wave" />
        </Typography>
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={150} />
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="body2" component="div">
          <Skeleton animation="wave" height={50} />
        </Typography>
        <Typography variant="h4" component="div">
          <Skeleton animation="wave" />
        </Typography>
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={150} />
      </Paper>
    </>
  );
};

export default PageSkeleton;
