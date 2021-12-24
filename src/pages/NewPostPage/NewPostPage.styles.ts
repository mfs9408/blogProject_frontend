import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2, 3, 2),
    },
    title: {
      marginBottom: theme.spacing(1),
    },
    button: {
      marginBottom: theme.spacing(1),
    },
  })
);
