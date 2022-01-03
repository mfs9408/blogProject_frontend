import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0),
      marginTop: 0,
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
