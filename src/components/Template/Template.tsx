import React, { PropsWithChildren } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '../AppBar';
import TemporaryAppBar from '../TemporaryAppBar';
import Container from '@material-ui/core/Container';
import useStyles from './Template.styles';
import Menu from '../Menu';

interface OtherProps {}

type TemplateProps = PropsWithChildren<OtherProps>;

const Template = ({ children }: TemplateProps) => {
  const classes = useStyles();
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
              <Menu />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Template;
