import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0),
    },
    typography: {
      color: '#465059',
    },
    clickedTypography: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);
