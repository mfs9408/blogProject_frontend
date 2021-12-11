import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(2, 3, 1),
    },
    author: {
      paddingBottom: theme.spacing(1),
    },
    title: {
      paddingBottom: theme.spacing(1),
    },
  })
);
