import { createStyles, makeStyles } from '@material-ui/core';
import theme from '../../theme';

export default makeStyles(() =>
  createStyles({
    root: {
      padding: theme.spacing(1, 2, 0),
      marginBottom: theme.spacing(3),
    },
  })
);
