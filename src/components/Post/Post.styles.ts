import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(2, 3, 2),
    },
    author: {
      paddingBottom: theme.spacing(1),
    },
    title: {
      paddingBottom: theme.spacing(1),
    },
    ratingSm: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    ratingMd: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    creatingDate: {
      flexGrow: 1,
    },
    dialogButton: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);
