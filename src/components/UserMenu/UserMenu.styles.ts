import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      border: '1px solid #d7dae0',
      borderRadius: 10,
      padding: theme.spacing(2, 0),
      background: '#fff',
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
