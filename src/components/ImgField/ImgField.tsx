import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { postActions } from '../../store/postData';
import useStyles from './ImgField.styles';

interface StringFieldInterface {
  id: string;
}

const ImgField = ({ id }: StringFieldInterface) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeField = () => dispatch(postActions.removeField(id));

  return (
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item className={classes.input}>
        <input type="file" name={id} required />
      </Grid>
      <Grid item className={classes.cancelButton}>
        <IconButton onClick={removeField}>
          <HighlightOffIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ImgField;
