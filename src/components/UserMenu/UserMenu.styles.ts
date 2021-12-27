import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    box: {
      padding: theme.spacing(2, 0),
      marginBottom: theme.spacing(2),
    },
    title: {
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(1),
    },
    button: {
      '&:hover': {
        background: 'rgba(0,130,250,0.1)',
        color: '#0082fa',
        boxShadow: 'inset 7px 0px 1px -4px #0082fa',
      },
    },
  })
);
