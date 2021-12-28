import React, { ChangeEvent, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import useStyles from './NewPostPage.styles';
import { useSelector } from '../../store';
import { PostType } from '../../types';
import ContentCreator from '../../components/FieldsCreator';
import AddContentField from '../../components/AddContentField';
import { PostService } from '../../services/PostService';
import { postActions } from '../../store/postData/slice';
import { useNavigate } from 'react-router-dom';

const NewPostPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imgArray, setImgArray] = useState<File[]>([]);
  const { user } = useSelector((state) => state.user);
  const { content, title } = useSelector((state) => state.postData);

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const contentArray = content.map((field) => {
      if (field.type === 'string') {
        return {
          type: field.type,
          value: event.target[field.id].value,
          id: field.id,
        };
      }

      setImgArray([...imgArray, event.target[field.id].files[0]]);
      return {
        type: field.type,
        value: event.target[field.id].files[0]?.name,
        id: field.id,
      };
    });

    await PostService.createNewPost(user, title, contentArray, imgArray);
    return navigate('/api');
  };

  useEffect(() => {
    return () => {
      dispatch(postActions.reset());
    };
  }, [dispatch]);

  return (
    <form onSubmit={onSubmit}>
      <Paper className={classes.paper}>
        <Grid container item>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Post title"
            name="title"
            color="secondary"
            required
            multiline
            value={title}
            className={classes.title}
            onChange={(event) =>
              dispatch(postActions.changeTitle(event.target.value))
            }
          />
          {content.map((data: PostType) => (
            <ContentCreator key={data.id} {...data} />
          ))}
        </Grid>
        <AddContentField />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.button}
          // onClick={onSubmit}
        >
          Create a post
        </Button>
      </Paper>
    </form>
  );
};

export default NewPostPage;
