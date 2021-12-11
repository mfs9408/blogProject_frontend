import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AppBarLink from '../AppBarLink';
import Typography from '@material-ui/core/Typography';
import MUIAppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import { useLocation } from 'react-router-dom';
import useStyles from './TemporaryAppBar.styles';

const TemporaryAppBar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <MUIAppBar className={classes.appBar} position="relative">
      <Toolbar>
        <Grid container item xs={2}>
          <DoubleArrowIcon color="secondary" />
        </Grid>
        <Grid container item>
          <AppBarLink to="/api/main" pathname={location.pathname}>
            <Typography variant="h6">Main</Typography>
          </AppBarLink>
          <AppBarLink to="/api/myposts" pathname={location.pathname}>
            <Typography variant="h6">My posts</Typography>
          </AppBarLink>
        </Grid>
        <Grid container justifyContent="space-around" item xs={1}>
          <SearchIcon />
          <SupervisedUserCircleIcon />
        </Grid>
      </Toolbar>
    </MUIAppBar>
  );
};

export default TemporaryAppBar;
