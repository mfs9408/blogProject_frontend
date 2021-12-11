import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles((theme) =>
  createStyles({
    up: {
      color: '#a8a8a8',
      '&:hover': {
        color: theme.palette.success.light,
        cursor: 'pointer',
      },
    },
    down: {
      color: '#a8a8a8',
      '&:hover': {
        color: theme.palette.error.main,
        cursor: 'pointer',
      },
    },
    typography: {
      color: '#a8a8a8',
    },
  })
);
