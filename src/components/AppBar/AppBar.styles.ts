import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  })
);
