import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default (isPathTheSame: boolean) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        color: isPathTheSame ? '#0082fa' : '#465059',
        boxShadow: isPathTheSame ? 'inset 0px -7px 1px -4px #0082fa' : 'none',
        '&:hover': {
          background: 'rgba(0,130,250,0.1)',
          color: '#0082fa',
          boxShadow: 'inset 0px -7px 1px -4px #0082fa',
        },
      },
    })
  );
