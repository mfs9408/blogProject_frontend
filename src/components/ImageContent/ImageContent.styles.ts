import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      paddingTop: theme.spacing(1),
    },
  })
);
