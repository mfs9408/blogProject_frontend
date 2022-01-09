import { createStyles, makeStyles } from '@material-ui/core';

export default (score: number) =>
  makeStyles((theme) =>
    createStyles({
      up: {
        color: score === 1 ? theme.palette.success.light : '#a8a8a8',
        '&:hover': {
          color: theme.palette.success.light,
          cursor: 'pointer',
        },
      },
      down: {
        color: score === -1 ? theme.palette.error.main : '#a8a8a8',
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
