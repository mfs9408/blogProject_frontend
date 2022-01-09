import React, { ChangeEvent, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { postActions } from '../../store/postData';
import useStyles from './StringField.styles';

interface StringFieldInterface {
  id: string;
  value?: string;
}

const StringField = ({ id, value }: StringFieldInterface) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [fieldValue, setFieldValue] = useState<string>(value || '');

  const removeField = () => dispatch(postActions.removeField(id));

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  return (
    <Grid container justifyContent="flex-start">
      <Grid item className={classes.textField}>
        <TextField
          name={id}
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
