import React, { PropsWithChildren } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '../AppBar';
import TemporaryAppBar from '../TemporaryAppBar';

interface OtherProps {}

type TemplateProps = PropsWithChildren<OtherProps>;

const Template = ({ children }: TemplateProps) => {

  return (
    <>
      <AppBar />
      <TemporaryAppBar />
      <Grid container className='grid'>{children}</Grid>
    </>
  );
};

export default Template;
