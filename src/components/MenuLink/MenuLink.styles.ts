import { createStyles, makeStyles } from '@material-ui/core';

export default (isPathTheSame: boolean) =>
  makeStyles(() =>
    createStyles({
      root: {
        display: 'flex',
        justifyContent: 'center',
        color: isPathTheSame ? '#0082fa' : '#465059',
        boxShadow: isPathTheSame ? 'inset 7px 0px 1px -4px #0082fa' : 'none',
        '&:hover': {
          background: 'rgba(0,130,250,0.1)',
          color: '#0082fa',
        },
      },
    })
  );
