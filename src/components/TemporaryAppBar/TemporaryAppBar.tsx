import React from 'react';
import { useLocation } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Typography from '@material-ui/core/Typography';
import MUIAppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './TemporaryAppBar.styles';
import AppBarLink from '../AppBarLink';
import { useIsSideBarOpen } from '../../utils/hooks/useIsSideBarOpen';

const TemporaryAppBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [isSideBarOpen, setIsSideBarOpen] = useIsSideBarOpen();

  const toggleOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <MUIAppBar className={classes.appBar} position="relative">
      <Toolbar>
        <Grid container item xs={2}>
          <DoubleArrowIcon color="secondary" />
        </Grid>
        <Grid container item>
          <AppBarLink to="/" pathname={location.pathname}>
            <Typography variant="h6">Main</Typography>
          </AppBarLink>
          <AppBarLink to="/myposts" pathname={location.pathname}>
            <Typography variant="h6">My posts</Typography>
          </AppBarLink>
        </Grid>
        <Grid container justifyContent="space-around" item xs={1}>
          <Avatar onClick={toggleOpen} />
        </Grid>
      </Toolbar>
    </MUIAppBar>
  );
};

export default TemporaryAppBar;
