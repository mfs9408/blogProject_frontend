import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const NoPosts = () => {
  return (
    <Grid container>
      <Typography color="secondary" variant="h3">
        Ooops... There are no any posts...
      </Typography>
    </Grid>
  );
};

export default NoPosts;
