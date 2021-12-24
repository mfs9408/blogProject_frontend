import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useDispatch } from 'react-redux';
import { postActions } from '../../store/postContent/slice';
import useStyles from './AddContentField.styles';

const AddContentField = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addField = () =>
    dispatch(postActions.addField({ type: 'string', value: '', id: uuidv4() }));

  return (
    <Grid
      container
      justifyContent="center"
      item
      xs={12}
      className={classes.root}
    >
      <IconButton onClick={addField}>
        <ArticleIcon color="primary" fontSize="large" />
      </IconButton>
      <IconButton>
        <AddAPhotoIcon color="primary" fontSize="large" />
      </IconButton>
    </Grid>
  );
};

export default AddContentField;
