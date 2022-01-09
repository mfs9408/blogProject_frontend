import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      background: '#f3f4f6',
    },
    paper: {
      padding: theme.spacing(7, 5),
    },
  })
);
