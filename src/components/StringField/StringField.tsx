import React, { ChangeEvent, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './StringField.styles';
import { postActions } from '../../store/postContent/slice';
import { useDispatch } from 'react-redux';

interface StringFieldInterface {
  id: string;
  value: string;
}

const StringField = ({ id, value }: StringFieldInterface) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [fieldValue, setFieldValue] = useState<string>(value);

  const removeField = () => dispatch(postActions.removeField(id));

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  useEffect(() => {
    dispatch(postActions.changeValue({ fieldValue, id }));
  }, [fieldValue]);

  return (
    <Grid container justifyContent="flex-start">
      <Grid item className={classes.textField}>
        <TextField
          name="stringContent"
          value={fieldValue}
          placeholder="Enter text"
          variant="outlined"
          color="secondary"
          onChange={onValueChange}
          multiline
          fullWidth
          required
        />
      </Grid>
      <Grid item className={classes.cancelButton}>
        <IconButton onClick={removeField}>
          <HighlightOffIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default StringField;
