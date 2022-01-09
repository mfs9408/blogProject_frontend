import React, { ChangeEvent, PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '../AppBar';
import TemporaryAppBar from '../TemporaryAppBar';
import useStyles from './Template.styles';
import Menu from '../Menu';
import MenuDrawer from '../MenuDrawer';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store';
import { searchDataActions } from '../../store/searchData';

interface OtherProps {}

type TemplateProps = PropsWithChildren<OtherProps>;

const Template = ({ children }: TemplateProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const { searchValue } = useSelector((state) => state.searchData);

  const onValueChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(searchDataActions.changeSearchValue(event.target.value));
  };

  return (
    <>
      <AppBar />
      <TemporaryAppBar />
      <Grid container className="grid">
        <Container maxWidth="lg" className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              {children}
            </Grid>
            <Grid item sm={3} className={classes.grid}>
              {isSm ? (
                <MenuDrawer isSm={isSm}>
                  <TextField
                    color="secondary"
                    variant="filled"
                    placeholder="Quick search"
                    value={searchValue}
                    onChange={onValueChange}
                  />
                  <Menu />
                </MenuDrawer>
              ) : (
                <Menu />
              )}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Template;
