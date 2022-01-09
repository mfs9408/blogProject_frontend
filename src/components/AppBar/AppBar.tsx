import React, { ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import MUIAppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom';
import { searchDataActions } from '../../store/searchData';
import useStyles from './AppBar.styles';
import AppBarLink from '../AppBarLink';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store';

const AppBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  const { searchValue } = useSelector((state) => state.searchData);

  const onValueChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(searchDataActions.changeSearchValue(event.target.value));
  };

  return (
    <MUIAppBar className={classes.appBar} position="relative">
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid container item xs={3}>
            <DoubleArrowIcon color="secondary" />
          </Grid>
          <Grid container item xs={5}>
            <AppBarLink to="/" pathname={location.pathname}>
              <Typography variant="h6">Main</Typography>
            </AppBarLink>
          </Grid>
          <Grid container justifyContent="flex-end" item xs={4}>
            <TextField
              color="secondary"
              variant="outlined"
              placeholder="Quick search"
              value={searchValue}
              onChange={onValueChange}
            />
          </Grid>
        </Grid>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
