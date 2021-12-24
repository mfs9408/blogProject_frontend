import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles((theme) =>
  createStyles({
    cancelButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(1),
    },
    textField: {
      flexGrow: 1,
    },
  })
);
