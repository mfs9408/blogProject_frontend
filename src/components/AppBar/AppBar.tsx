import React from 'react';
import Grid from '@material-ui/core/Grid';
import MUIAppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom';
import useStyles from './AppBar.styles';
import AppBarLink from '../AppBarLink';

const AppBar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <MUIAppBar className={classes.appBar} position="relative">
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid container item xs={3}>
            <DoubleArrowIcon color="secondary" />
          </Grid>
          <Grid container item xs={5}>
            <AppBarLink to="/api" pathname={location.pathname}>
              <Typography variant="h6">Main</Typography>
            </AppBarLink>
            <AppBarLink to="/api/myposts" pathname={location.pathname}>
              <Typography variant="h6">My posts</Typography>
            </AppBarLink>
          </Grid>
          <Grid container justifyContent="flex-end" item xs={4}>
            <TextField
              color="secondary"
              variant="outlined"
              placeholder="Find"
            />
          </Grid>
        </Grid>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;

/*<IconButton*/
/*  color="inherit"*/
/*  onClick={toggleOpen}*/
/*  className={classes.menuButton}*/
/*>*/
/*  <MenuIcon />*/
/*</IconButton>*/
