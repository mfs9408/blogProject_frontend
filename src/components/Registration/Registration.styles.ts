import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      border: '1px solid #d7dae0',
      borderRadius: 10,
      padding: theme.spacing(2, 0),
    },
  })
);
